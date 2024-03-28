const Shift = require("../models/Shift");

// clock-in
const clockIn = async (req, res) => {
  const { userId } = req.body;
  const date = new Date();
  //save time to DB
  const shift = await Shift.create({
    timeIn: date.getTime(),
    date: new Date().toLocaleString(),
    userId: userId,
  });
  //return timestamp
  res.json(shift.timeIn);
};

// clock-out
const clockOut = async (req, res) => {
  const { grossPay, netPay, hoursWorked } = req.body;
  // Find the active shift
  const activeShift = await Shift.findOne({ endTime: { $exists: false } });

  if (activeShift) {
    // Set the end time
    activeShift.endTime = Date.now();
    // Set shift data
    activeShift.grossPay = grossPay;
    activeShift.netPay = netPay;
    activeShift.hoursWorked = hoursWorked;

    // Save the updated shift document
    await activeShift.save();

    // Return the end time
    res.json({ endTime: activeShift.endTime });
  } else {
    res.json({ message: "No active shift found." });
  }
};

// Delete Shift

const deleteShift = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Shift.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Shift not found" });
    }
    return res.json({ message: "Successfully Deleted" });
  } catch (error) {
    console.error("Error deleting shift:", error);
    return res.status(500).json({ message: "Error deleting shift" });
  }
};

module.exports = {
  clockIn: clockIn,
  clockOut: clockOut,
  deleteShift: deleteShift,
};
