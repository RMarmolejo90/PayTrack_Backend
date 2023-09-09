const jwt = require('jsonwebtoken');
const Shift = require('../models/Shift')

const getUserInfo = async (req, res) => {
  console.log(req.headers);
  const userId = req.headers.userid;
  try {
    
    if (!userId) {
      console.log(`userID is ${userId} and throwing proController error`);
      return res.status(400).json({ error: 'Invalid user ID in token' });
    }

    const userInfo = await Shift.find({userId: userId});
    console.log(`info query data: ${userInfo}`);
    if (userInfo.length === 0) {
      console.log("no user info");
      return res.status(204).json({ message:"No History" });
    }

    // Send the user data as the response
    console.log(`user info is ${userInfo}`);
    return res.json(userInfo);
  } catch (error) {
    console.error('Error fetching user info:', error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token has expired' });
    }
    return res.status(500).json({ error: 'Internal server error from proController' });
  }
};

module.exports = getUserInfo;
