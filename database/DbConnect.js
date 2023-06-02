const mongoose = require('mongoose');

connectDb().catch(err => console.log(err));
const password = process.env.DB_PASS;
const username = process.env.DB_USER;


async function connectDb() {
  await mongoose.connect('mongodb+srv://'+{username}+':'+{password}+'@paytrack.pvcvojy.mongodb.net/')
}
