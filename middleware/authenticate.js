require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/Users')

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token === null) return res.sendStatus(401);

  try {
    console.log(authHeader);
    console.log(token);
    const {_id} = jwt.verify(token, process.env.SECRET_KEY);
    console.log(_id);
    const user = await User.findOne({_id});
    console.log(user);
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(403).json({error: 'request not authorized'}); 
  }
}
module.exports = authenticateToken;
