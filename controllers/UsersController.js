const User = require('../models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password} = req.body; 
    bcrypt.hash(password, saltRounds, async function(err, hash) {
    try {
        await User.create({
        firstName,
        lastName,
        email,
        password: hash,
      });
  
      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    };
    if (err){console.log(err);}
  });
  };
module.exports = registerUser

  