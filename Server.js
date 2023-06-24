const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Server is Live!')
})
// Import Controllers
const { clockIn } = require('./controllers/ShiftController.js')

// Dependencies
require('./database/DbConnect.js');
require('dotenv').config()

// Routes

app.post('/', clockIn )


app.listen(port, () => {
  console.log(`Connected on Port: ${port}`)
})