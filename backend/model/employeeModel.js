const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    MobNo: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Course: {
        type: String,
        required: true
    }
});

const employeeModel = mongoose.model('employee', schema);
module.exports = employeeModel;
