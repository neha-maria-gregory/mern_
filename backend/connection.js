const mongoose =require('mongoose');
//connect to mongodb
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connected to db")
    })
    .catch((error)=>{
        console.log(error)
    })