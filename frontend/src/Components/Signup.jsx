import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Signup.css'

const Signup = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({ FirstName: '', LastName: '', MobNo: '', Email: '', Password: '' })

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const addData = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3015/add', input)
      .then((response) => {
        console.log(response.data)
        navigate('/login')
      })
      .catch((error) => {
        console.log(error)
      })
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <Typography variant="h5">Create an account</Typography>
        <form onSubmit={addData}>
          <TextField label="First Name" variant="filled" name="FirstName" required onChange={handleChange} value={input.FirstName} fullWidth />
          <TextField label="Last Name" variant="filled" name="LastName" required onChange={handleChange} value={input.LastName} fullWidth />
          <TextField label="Mobile No" variant="filled" name="MobNo" required onChange={handleChange} value={input.MobNo} fullWidth />
          <TextField label="Email" variant="filled" name="Email" required onChange={handleChange} value={input.Email} fullWidth />
          <TextField label="Password" variant="filled" type="password" name="Password" required onChange={handleChange} value={input.Password} fullWidth />
          <Button 
  variant="contained" 
  type="submit" 
  fullWidth 
  style={{ backgroundColor: '#f5f5dc', color: 'black' }}  // Beige background and black text
>
  Sign up
</Button>


        </form>
        <br/>
        <Typography variant="h7">
  <div style={{ textAlign: 'center' }}>
    Already have an account? <a href="/login">Login</a>
  </div>
</Typography>
      </div>
    </div>
  );
}

export default Signup;
