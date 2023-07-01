const mongoose = require('mongoose');
require('dotenv').config()
const uri = process.env.URI
connectDb().catch(err => console.log(err));


async function connectDb() {
  await mongoose.connect(uri);
  console.log("Connected to Database");
}
