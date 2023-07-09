const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
// Dependencies
//require('./database/DbConnect.js');
//require('dotenv').config();
app.use(cors(
  {credentials: true}
));
app.use(express.json());

// Import Controllers
const { clockIn, clockOut } = require('./controllers/ShiftController.js')
const registerUser = require('./controllers/UsersController.js')


// Routes

app.get('/register', (req, res) => {res.send('Server is running')});

app.post('/clock-in', clockIn );

app.put('/clock-out', clockOut);

app.post('/register', registerUser);


app.listen(port, () => {
  console.log(`Connected on Port: ${port}`);
});