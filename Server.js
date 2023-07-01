const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

// Import Controllers
const { clockIn, clockOut } = require('./controllers/ShiftController.js')
const registerUser = require('./controllers/UsersController.js')

// Dependencies
//require('./database/DbConnect.js');
//require('dotenv').config();
app.use(cors());

// Routes

app.post('/clock-in', clockIn );

app.put('/clock-out', clockOut);

app.post('/register', registerUser);


app.listen(port, () => {
  console.log(`Connected on Port: ${port}`);
});