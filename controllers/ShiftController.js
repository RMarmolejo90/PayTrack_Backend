const Shift = require('../models/Shift');

// clock-in
const clockIn = async(req, res) => {
    const { email, userId } = req.body;
    const date = new Date()
    //save time to DB
    const shift = await Shift.create({
        timeIn: date.getTime(),
        date: Date.now().toLocaleString(),
        userId: userId,
    });
    //return timestamp
    console.log(shift.timeIn);
    res.json(shift.timeIn);
}


// clock-out
const clockOut = async (req, res) => {
    // Find the active shift
    const activeShift = await Shift.findOne({ endTime: { $exists: false } });
  
    if (activeShift) {
      // Set the end time
      activeShift.endTime = Date.now();
  
      // Save the updated shift document
      await activeShift.save();
  
      // Return the end time
      console.log(activeShift.endTime);
      res.json({ endTime: activeShift.endTime });
    } else {
      res.json({ message: 'No active shift found.' });
    }
  };
  

module.exports = {
    clockIn: clockIn,
    clockOut: clockOut,
}