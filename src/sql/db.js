const spicedPg = require("spiced-pg");

let dbUrl;
if (process.env.DATABASE_URL) {
  dbUrl = process.env.DATABASE_URL;
} else {
  dbUrl = `postgres:postgres:postgres@localhost:5432/greenhouse`;
}
const db = spicedPg(dbUrl);

module.exports.getPlants = () => {
  return db.query(`SELECT * from user_plants`);
};

module.exports.addNewPlant = (plantName, botanicalName) => {
  return db.query(
    `
      INSERT INTO
      user_plants (common_name, latin_name)
      VALUES ($1, $2) RETURNING id
    `,
    [plantName, botanicalName]
  );
};

module.exports.deletePlant = id => {
  return db.query(
    `
      DELETE from
      user_plants
      where id = ($1)
    `,
    [id]
  );
};
