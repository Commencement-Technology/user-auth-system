const express = require("express");
const { Login, Register, GetUser } = require("../controllers/authController");
const verifyAuth = require("../middlewares/verifyAuth");
const {
  validateLogin,
  validateRegister,
} = require("../middlewares/validators");

const router = express.Router();

router.post("/login", validateLogin, Login);

router.post("/register", validateRegister, Register);

router.get("/user", verifyAuth, GetUser);

module.exports = router;
