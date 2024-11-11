import { Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import axios from 'axios';

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

  const styles = {
    backgroundContainer: {
      backgroundImage: 'url("./images/ideas.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      color: '#ffffff',
    },
    formContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
      padding: '40px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
      maxWidth: '400px',
      width: '100%',
    },
    heading: {
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    textField: {
      backgroundColor: '#ffffff',
      borderRadius: '5px',
    },
    loginButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#4caf50', // Green button color
      color: '#ffffff',
    },
    signUpLink: {
      marginTop: '20px',
      fontSize: '0.9rem',
      color: '#ffffff',
    },
  };

  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.formContainer}>
        <Typography variant='h4' style={styles.heading}>Login Here</Typography>
        
        <TextField
          label="Email"
          variant="filled"
          name="Email"
          required
          value={input.Email}
          onChange={handleChange}
          style={{ ...styles.textField, width: '100%' }}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <br />
        <br />
        <TextField
          label="Password"
          variant="filled"
          name="Password"
          required
          type="password"
          value={input.Password}
          onChange={handleChange}
          style={{ ...styles.textField, width: '100%' }}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <br />
        <Button variant='contained' style={styles.loginButton} onClick={handleSubmit}>Login</Button>
        <Typography style={styles.signUpLink}>
          Don't have an account? <a href="/signup" style={{ color: '#ffeb3b' }}>Sign Up</a>
        </Typography>
      </div>
    </div>
  );
};

export default Login;
