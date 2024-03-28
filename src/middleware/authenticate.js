require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader;
  if (!authHeader || !token) {
    return res.sendStatus(401); // Unauthorized
  }

  try {
    const validUser = jwt.verify(token, process.env.SECRET_KEY);
    if (validUser) {
      next();
    } else {
      return res.sendStatus(403); // Forbidden
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(403); // Forbidden
  }
};

module.exports = authenticateToken;
