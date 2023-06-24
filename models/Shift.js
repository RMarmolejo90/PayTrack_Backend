const mongoose = require('mongoose');
const { Schema } = mongoose;

const shiftSchema = new Schema({
  timeIn: String, // String is shorthand for {type: String} 
});

const shift = mongoose.model('Shift', shiftSchema);

module.exports = shift;