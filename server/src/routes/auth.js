const express = require("express");
const { Login, Register, GetUser } = require("../controllers/authController");
const verifyAuth = require("../middlewares/verifyAuth");

const router = express.Router();

router.post("/login", Login);

router.post("/register", Register);

router.get("/user", verifyAuth, GetUser);

module.exports = router;
