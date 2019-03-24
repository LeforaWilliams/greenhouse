const bcrypt = require("bcryptjs");
const { promisify } = require("util");

const genSalt = promisify(bcrypt.genSalt);
const hash = promisify(bcrypt.hash);
const compare = promisify(bcrypt.compare);

exports.hashPassword = password => {
  return genSalt().then(salt => {
    return hash(password, salt);
  });
};

exports.checkPassword = (password, hash) => {
  return compare(password, hash);
};
