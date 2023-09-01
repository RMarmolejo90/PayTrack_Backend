require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

// Dependencies
require('./database/DbConnect.js');
app.use(cors(
  {credentials: true}
));
app.use(express.json());

// Import Controllers
const { clockIn, clockOut } = require('./controllers/ShiftController.js')
const registerUser = require('./controllers/RegisterController.js')
const userLogin = require('./controllers/LoginController.js')
const authenticateToken = require('./middleware/authenticate.js');
const getUserInfo = require('./controllers/ProController.js');
const getEmail = require('./controllers/getEmail.js')


// Routes

app.get('/', (req, res) => {
  res.write("active");
});

app.get('/register', registerUser);

app.get('/auth', authenticateToken, (_req, res) => {
  console.log('authenticated and awaiting response');
  res.json({ valid: true });
});

app.get('/user', authenticateToken, getUserInfo);

app.get('/email', getEmail);

app.post('/clock-in', clockIn );

app.put('/clock-out', clockOut);

app.post('/register', registerUser);

app.post('/login', userLogin);


app.listen(port, () => {
  console.log(`Connected on Port: ${port}`);
});