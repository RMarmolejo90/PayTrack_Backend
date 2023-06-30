const User = require('../models/Users');

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body; 
    try {
        await User.create({
        firstName,
        lastName,
        email,
        password,
      });
  
      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    };
  };
module.exports = registerUser;

  