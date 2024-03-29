require("dotenv").config();
const mongoose = require("mongoose");

connectDb().catch((err) => console.error(err));

async function connectDb() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("connected to database");
}
