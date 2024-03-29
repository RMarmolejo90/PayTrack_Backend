const jwt = require("jsonwebtoken");
const Shift = require("../models/Shift");

const getUserInfo = async (req, res) => {
  const userId = req.headers.userid;
  try {
    if (!userId) {
      return res.status(400).json({ error: "Invalid user ID in token" });
    }

    const userInfo = await Shift.find({ userId: userId });
    if (userInfo.length === 0) {
      return res.status(204).json({ message: "No History" });
    }

    // Send the user data as the response
    return res.json(userInfo);
  } catch (error) {
    console.error("Error fetching user info:", error);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token has expired" });
    }
    return res
      .status(500)
      .json({ error: "Internal server error from proController" });
  }
};

module.exports = getUserInfo;
