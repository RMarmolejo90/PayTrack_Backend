require("dotenv").config({ path: "../../.env" });
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const saltRounds = 5;
const jwt = require("jsonwebtoken");
require("mongoose");

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists in the database
    const userExists = await User.exists({ email });
    if (userExists) {
      return res
        .status(409)
        .json({ error: "User already exists, Please Log In" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });

    // Registration successful
    res.status(201).json({
      _id: newUser._id,
      name: newUser.firstName,
      email: newUser.email,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = registerUser;
