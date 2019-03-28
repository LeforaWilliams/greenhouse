const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieSession = require("cookie-session");
const secrets = require("./secrets.json");

const { regValidation } = require("./validation-policies.js");
const { hashPassword, checkPassword } = require("./encryption.js");
const {
  getPlants,
  addNewPlant,
  deletePlant,
  registerUser,
  loginUser
} = require("./src/sql/db.js");

app.use(bodyParser.json());
app.use(cors());
app.use(
  cookieSession({
    name: "session",
    keys: [secrets.cookieSecret],
    maxAge: 1000 * 60 * 60 * 24 * 90
  })
);
app.use(express.static("./public/index.html"));

app.post("/register", regValidation, (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  hashPassword(password)
    .then(hash => {
      return registerUser(firstName, lastName, email, hash);
    })
    .then(data => {
      req.session.firstName = firstName;
      req.session.lastName = lastName;
      req.session.email = email;
      req.session.id = data.rows[0].id;

      res.status(200).json({
        success: true,
        user: req.session.firstName,
        logInId: req.session.id
      });
    })
    .catch(err => {
      console.error("Error in REGISTER POST route in index.js", err);
      res.status(400);
    });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  loginUser(email).then(data => {
    return checkPassword(password, data.rows[0].password).then(response => {
      if (response) {
        const { id, first_name, last_name, email } = data.rows[0];
        req.session.firstName = first_name;
        req.session.lastName = last_name;
        req.session.email = email;
        req.session.id = id;

        res.status(200).json({
          success: true,
          user: req.session.firstName,
          logInId: req.session.id
        });
      } else {
        res.status(403).json({ success: false });
      }
    });
  });
});

app.get("/plants", (req, res) => {
  getPlants().then(plants => {
    res.json(plants.rows);
  });
});

// app.get("/plants", (req, res) => {
//   async() => {
//   const data = await getPlants();
//   res.json(data.rows)
//   }
// });

app.post("/add-plant", (req, res) => {
  if (!req.body.plantName) {
    res.json(false);
  } else {
    const { plantName, botanicalName } = req.body;
    addNewPlant(plantName, botanicalName).then(data => {
      res.json({
        common_name: plantName,
        latin_name: botanicalName,
        id: data.rows.id
      });
    });
  }
});

app.post("/delete-plant", (req, res) => {
  const { id } = req.body;
  deletePlant(id).then(() => {
    res.json(id);
  });
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
