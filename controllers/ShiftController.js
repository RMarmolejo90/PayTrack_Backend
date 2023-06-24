const Shift = require('../models/Shift');

// clock-in
const clockIn = async(req, res) => {
    //save time to DB
    Shift.create({
        timeIn: new Date(dateTime.now),
    })
    //return timestamp

}

//clock-out
const clockOut = async(req,res) => {
    //set time
    const endTime = DateTime.now()
    //save time to DB
    
    //return timestamp

}