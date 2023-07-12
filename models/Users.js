const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String, // String is shorthand for {type: String} 
    lastName: String,
    email: String,
    password: String,
    _id: _id,
  });
  
  const user = mongoose.model('User', userSchema);
  
  module.exports = user;