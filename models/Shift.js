const mongoose = require('mongoose');
const { Schema } = mongoose;

const shiftSchema = new Schema({
  timeIn: Number, // String is shorthand for {type: String} 
  endTime: Number,
  grossPay: Number,
  netPay: Number,
  hoursWorked: Number,
  date: Number
});

const shift = mongoose.model('Shift', shiftSchema);

module.exports = shift;