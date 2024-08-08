const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

async function Login(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;

    let user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({
        msg: "invalid credentials",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        msg: "invalid credentials",
        success: false,
      });
    }

    jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "10m" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, msg: err });
  }
}

async function Register(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { username, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        msg: "user already exists",
        success: false,
      });
    }

    user = new User({
      username,
      email,
      password,
    });

    await user.save();

    jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token,
        });
      }
    );
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
}

async function GetUser(req, res) {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      user,
      success: true,
    });
  } catch (err) {
    res.status(500).json({ msg: "SERVER ERROR" });
  }
}

module.exports = { Login, Register, GetUser };
