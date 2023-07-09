const User = require('../models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 5;

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);

    await User.create({
      firstName,
      lastName,
      email,
      password: hash,
    });

  } catch (err){
    console.error(err);
    res.status(500).send('problem with saving to the database');
  }
};

module.exports = registerUser;
