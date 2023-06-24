const mongoose = require('mongoose');
require('dotenv').config()
// const password = process.env.DB_PASS;
// const username = process.env.DB_USER;

connectDb().catch(err => console.log(err));


async function connectDb() {
  await mongoose.connect(process.env.URI);
  console.log("Connected to Database");
}
