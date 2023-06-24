const mongoose = require('mongoose');
const password = process.env.DB_PASS;
const username = process.env.DB_USER;

connectDb().catch(err => console.log(err));


async function connectDb() {
  await mongoose.connect(`mongodb+srv://${username}:${password}@paytrack.pvcvojy.mongodb.net/`)
}
