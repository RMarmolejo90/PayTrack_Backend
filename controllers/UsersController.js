const User = require('../models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 5;

const registerUser = async (req, res) => {
 
  try {
    const { firstName, lastName, email, password } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);

    //Check database existing user
    //If user exists - route to login page
    if (User.exists({email: email})){
      return res.redirect('/login');
    }
    //If user does not exist, save credentials
    else{


    await User.create({
      firstName,
      lastName,
      email,
      password: hash,
    });

  } catch (err){
    console.error(err);
    res.status(500).send('problem with saving to the database');}
  }
};

module.exports = registerUser;
