const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { getPlants, addNewPlant, deletePlant } = require("./src/sql/db.js");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("./public/index.html"));

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
