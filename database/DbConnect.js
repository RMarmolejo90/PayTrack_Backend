require('dotenv').config();
const mongoose = require('mongoose');

connectDb().catch(err => console.log(err));

async function connectDb() {
  await mongoose.connect("mongodb+srv://RMarmolejo:COjv1ZXGoIkBOw2G@paytrack.pvcvojy.mongodb.net/?retryWrites=true&w=majority");
  console.log("Connected to Database");
}
