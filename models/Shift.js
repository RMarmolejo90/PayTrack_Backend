import mongoose from "mongoose";

const { Schema } = mongoose;

const shiftSchema = new Schema({
  timeIn: String, // String is shorthand for {type: String} 
  date: Date,
});

const shift = mongoose.model('Shift', shiftSchema);

module.exports = shift;