const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Server is Live!')
})
// Import Controllers
const { clockIn, clockOut } = require('./controllers/ShiftController.js')
const { registerUser } = require('./controllers/UsersController.js')

// Dependencies
require('./database/DbConnect.js');
require('dotenv').config();

// Routes

app.post('/clock-in', clockIn );

app.put('/clock-out', clockOut);

app.post('/register', registerUser);


app.listen(port, () => {
  console.log(`Connected on Port: ${port}`);
});