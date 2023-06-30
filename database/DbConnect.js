const mongoose = require('mongoose');
require('dotenv').config()

connectDb().catch(err => console.log(err));


async function connectDb() {
  await mongoose.connect(process.env.URI);
  console.log("Connected to Database");
}
