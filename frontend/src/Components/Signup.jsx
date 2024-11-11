import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const navigate = useNavigate()
   const [input,setInput] = useState({FirstName:'',LastName:'',MobNo:'',Email:'',Password:''})
    const handleChange = (e) =>{
      setInput({...input,[e.target.name]:e.target.value})
      console.log(input)
    }

    const backgroundStyle = {
        backgroundImage: 'url("./images/signupbg.jpg")',
        backgroundSize: 'cover',
        height: '90vh',
    }
    const addData = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3015/add', input)
        .then((response) => {
          console.log(response.data)
          console.log("data added")
          navigate('/login')
        })
        .catch((error) => {
          console.log(error)
        })
        
      };
  return (
    
      <div style={backgroundStyle}>
      
      <div style={{textAlign:"left",paddingTop:"2%",paddingLeft:"5%"}}>
    
      <Typography  variant='h5' >Create an account</Typography>
        <br/>
      <TextField  label="First Name" variant="filled" name="FirstName" required onChange={handleChange}  value={input.FirstName}  />
      
      <br />
      <br />
      <TextField  label="Last Name" variant="filled" name="LastName" required onChange={handleChange}  value={input.LastName}  />
      
      <br />
      <br />
      <TextField label="Mob no" variant="filled"  name="MobNo" required onChange={handleChange}  value={input.MobNo} />
      <br />
      <br />
      <TextField label="email" variant="filled"  name="Email" required onChange={handleChange}  value={input.Email} />
      <br />
      <br />
      <TextField label="password" variant="filled" required type="password"  name="Password"   onChange={handleChange}  value={input.Password}/>
      <br />
      <br />
      <Button variant='contained' onClick={addData}>Sign up</Button>
      <br/>
      <br/>
      <Typography variant='h7'>Already have an account? <a href="http://localhost:5173/login"> Login</a></Typography>
      </div>
      
    </div>
    
  )
}

export default Signup