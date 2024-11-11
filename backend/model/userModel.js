const mongoose = require('mongoose');

// Define the schema
const schema = mongoose.Schema({
    UserName: String,
    MobNo: Number,
    Email: String,
    Password: String
});

// Explicitly set the collection name to 'users'
const userModel = mongoose.model('user', schema, 'users'); // 'users' is the collection name

module.exports = userModel;
