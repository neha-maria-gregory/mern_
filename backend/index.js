const express = require('express');
const cors = require('cors');
 
require('./connection'); // Ensure your connection file is set up
const userModel = require('./model/userModel'); // Import the user model
const employeeModel = require('./model/employeeModel');


const app = express();
app.use(express.json());
app.use(cors());

// API to post user data 
app.post('/add',async(req,res)=>{
    try{
        console.log(req.body);
        await userModel(req.body).save();
        res.send({message:"data added sucessfully"})
   }catch(error){
       console.log(error)
   }
})

//api for getting users
//api for getting users
app.get('/view',async(req,res)=>{
  try {
      const {Email} = req.query
      var data = await userModel.findOne({Email})
      res.send(data)
  } catch (error) {
      console.log(error)
      res.send('Invalid email id or password\n' + error)
  }
})
  
// Route to handle adding an employee
app.post('/addemp', async(req,res) => {
  try {
      await employeeModel(req.body).save()
      res.send({message:"Employee form submitted succesfully"})
      console.log("form saved") 
  } catch (error) {
      console.log(error)
      res.send('form not saved\n' + error)
  }
})


// Start the server
app.listen(3015, () => {
    console.log("Server is running on port 3015");
});
