const User = require('../models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 5;

const registerUser = async (req, res) => {
  try {
    // const { firstName, lastName, email, password } = req.body;
    // const hash = await bcrypt.hash(password, saltRounds);

    // await User.create({
    //   firstName,
    //   lastName,
    //   email,
    //   password: hash,
    // });
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body);
    await User.create({
      firstName,
      lastName,
      email,
      password
    });
    console.log('sucess');

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = registerUser;
