require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

// Dependencies
require("./database/DbConnect.js");
app.use(cors({ credentials: true }));
app.use(express.json());

// Import Controllers
const {
  clockIn,
  clockOut,
  deleteShift,
} = require("./controllers/ShiftController.js");
const registerUser = require("./controllers/RegisterController.js");
const userLogin = require("./controllers/LoginController.js");
const authenticateToken = require("./middleware/authenticate.js");
const getUserInfo = require("./controllers/ProController.js");
const getEmail = require("./controllers/getEmail.js");

// Routes

app.get("/", (req, res) => {
  res.write("active");
});

app.get("/auth", authenticateToken, (_req, res) => {
  res.json({ valid: true });
});

app.get("/user", authenticateToken, getUserInfo);

app.get("/email", getEmail);

app.post("/clock-in", clockIn);

app.put("/clock-out", clockOut);

app.get("/register", registerUser);

app.post("/register", registerUser);

app.post("/login", userLogin);

app.delete("/shift/:id", deleteShift);

app.listen(port, "0,0,0,0", () => {
  console.log(`server is running on port ${port}`);
});
