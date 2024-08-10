const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      msg: "No valid token",
      success: false,
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (err) {
    res.status(400).json({
      msg: "No valid token",
      success: false,
    });
  }
};
