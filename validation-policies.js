const joi = require("joi");

module.exports.regValidation = (req, res, next) => {
  const schema = {
    firstName: joi.string(),
    lastName: joi.string(),
    email: joi.string().email(),
    password: joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}"))
  };
  const { firstName, lastName, email, password } = req.body;
  const { error, value } = joi.validate(
    { firstName, lastName, email, password },
    schema
  );

  if (error) {
    switch (error.details[0].context.key) {
      //^^^ to find out what failed the validation
      case "email":
        res.status(400).json({ err: `Please provide a valid email address.` });
        break;

      case "password":
        res.status(400).json({
          err: `Please make sure that your password has 8-32 charachters and does not include and symbols.`
        });
        break;

      default:
        res
          .status(400)
          .json({ err: `Something went wrong. Please try again.` });
        break;
    }
  } else {
    next();
  }
};
