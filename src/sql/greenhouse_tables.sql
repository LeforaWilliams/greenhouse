DROP TABLE IF EXISTS user_plants;
DROP TABLE IF EXISTS user;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR (168) NOT NULL,
  last_name VARCHAR (168) NOT NULL,
  email VARCHAR (168) NOT NULL,
  password VARCHAR (168) NOT NULL
);

CREATE TABLE user_plants (
  id SERIAL PRIMARY KEY,
  common_name VARCHAR (168) NOT NULL,
  latin_name VARCHAR (168) DEFAULT null,
  watered BOOLEAN DEFAULT false,
  fertilisation VARCHAR (168) DEFAULT null
);

INSERT INTO user_plants  (common_name, latin_name) VALUES('Rubber Plant', 'Ficus elastica');
INSERT INTO user_plants (common_name) VALUES ('Calathea');
