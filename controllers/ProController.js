const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const Shift = require('../models/Shift')

const getUserInfo = async (req, res) => {
  try {
    const token = req.headers.authorization?.split('.')[1];

    if (!token) {
      return res.status(401).json({ error: 'Authentication token not found' });
    }

    // Verify the token and extract the userId
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.userId;

    if (!userId) {
      return res.status(400).json({ error: 'Invalid user ID in token' });
    }

    const userInfo = await User.findOne(userId);
    if (!userInfo) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Send the user data as the response
    return res.status(200).json(userInfo);
  } catch (error) {
    console.error('Error fetching user info:', error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token has expired' });
    }
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getUserInfo;
