const Shift = require('../models/Shift');

// clock-in
const clockIn = async(req, res) => {
    const date = new Date()
    //save time to DB
    const shift = await Shift.create({
        timeIn: date.now(),
    });
    //return timestamp
    console.log(timeIn);
    res.json(shift.timeIn);
}

//clock-out
const clockOut = async(req, res) => {
    //set time
    const endTime = DateTime.now()
    //save time to DB
    
    //return timestamp

}

module.exports = {
    clockIn: clockIn,
    clockOut: clockOut,
}