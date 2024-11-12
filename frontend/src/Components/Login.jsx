import { Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ Email: '', Password: '' });
  const { setAuthenticated, setUserId } = useAuth();

  useEffect(() => {
    return () => {
      setInput({ Email: '', Password: '' });
    };
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get('http://localhost:3015/view', { params: { Email: input.Email } });
      const userData = response.data;
  
      if (userData.Email === input.Email && userData.Password === input.Password) {
        console.log("Credentials matched");
        setAuthenticated(true);
        setUserId(userData.Email);
        navigate('/profile');
      } else {
        alert('Invalid username or password.');
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div style={{
      backgroundImage: 'url(".src/assets/civil.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      color: '#ffffff',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly white background for readability
        padding: '40px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        maxWidth: '400px',
        width: '100%',
      }}>
        <Typography variant='h4' style={{
          marginBottom: '20px',
          fontWeight: 'bold',
          color: 'black', // Dark color for better readability
        }}>Login Here</Typography>

        <TextField
          label="Email"
          variant="filled"
          name="Email"
          required
          value={input.Email}
          onChange={handleChange}
          style={{
            backgroundColor: '#e0e851', // Beige background
            borderRadius: '5px',
            width: '100%',
            marginBottom: '15px',
          }}
          InputProps={{
            disableUnderline: true,
          }}
        />
        
        <TextField
          label="Password"
          variant="filled"
          name="Password"
          required
          type="password"
          value={input.Password}
          onChange={handleChange}
          style={{
            backgroundColor: '#e0e851', // Beige background
            borderRadius: '5px',
            width: '100%',
            marginBottom: '15px',
          }}
          InputProps={{
            disableUnderline: true,
          }}
        />
        
        <Button 
          variant='contained' 
          onClick={handleSubmit} 
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#fbc02d', // Darker yellow button color
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#f9a825', // Slightly darker yellow on hover
            },
          }}
        >
          Login
        </Button>

        <Typography style={{
          marginTop: '20px',
          fontSize: '0.9rem',
          color: '#333',
        }}>
          Don't have an account? <a href="/signup" style={{ color: '#ffeb3b' }}>Sign Up</a>
        </Typography>
      </div>
    </div>
  );
};

export default Login;
