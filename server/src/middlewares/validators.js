const { body } = require("express-validator");

const validateLogin = [
  body("email")
    .notEmpty()
    .withMessage("Email is required.")
    .bail()
    .isEmail()
    .withMessage("Please enter a valid email address."),
  body("password").notEmpty().withMessage("Password is required."),
];

const validateRegister = [
  body("username").notEmpty().withMessage("Name is required."),
  body("email")
    .notEmpty()
    .withMessage("Email is required.")
    .bail()
    .isEmail()
    .withMessage("Please enter a valid email address."),
  body("password")
    .notEmpty()
    .withMessage("Password is required.")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
];

module.exports = {
  validateLogin,
  validateRegister,
};
