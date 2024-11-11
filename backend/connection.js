

const mongoose =require('mongoose');
//connect to mongodb

mongoose.connect("mongodb+srv://dealsdray:abc@cluster0.fgd1g.mongodb.net/ddnewss?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("connected to db")
    })
    .catch((error)=>{
        console.log(error)
    })