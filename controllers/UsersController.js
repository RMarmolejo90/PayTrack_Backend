const dotenv = require('dotenv');
dotenv.config({ path: '../../../.env' });
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 5;
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {

  //test dotenv
  console.log(process.env.TEST);

  try {
    const { firstName, lastName, email, password } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);

    // Check if user already exists in the database
    const userExists = await User.exists({ email });
    if (userExists) {
      res.send('User already exists');
    } else {

      // User does not exist, save the credentials
      await User.create({
        firstName,
        lastName,
        email,
        password: hash,
      });
      // Registration successful
      res.send("Success");
    }
  } catch (error) {
    console.error(error);
    // res.status(500).send('Problem with saving to the database');
  }
};

module.exports = registerUser;
