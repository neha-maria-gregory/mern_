import React, { useEffect, useState } from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import axios from 'axios';

const Navbar = () => {
  const { authenticated, setUserId, userId } = useAuth();
  const [name, setName] = useState("Guest");
  const [lname, setLname] = useState("User");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:3015/view`, { params: { Email: userId } });
          setName(response.data.FirstName);
          setLname(response.data.LastName);
        } catch (error) {
          console.log("Error fetching profile data:", error);
        }
      }
    };
    fetchData();
  }, [userId]);

  const handleHomeClick = () => {
    navigate('/profile');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static" sx={{ backgroundColor: '#F5F5DC', boxShadow: 'none' }}>
        <Toolbar>
          <img
            src="./src/assets/logo2.png"
            alt="logo"
            width="80px"
            style={{ cursor: 'pointer', marginRight: '15px' }}
            onClick={handleLogoClick} // Navigate to home on logo click
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#333' }}>
            DD Constructions
          </Typography>
          
          {authenticated ? (
            <>
              <Button color="inherit" onClick={handleHomeClick} sx={{ color: '#333', textTransform: 'uppercase', marginRight: '15px' }}>Home</Button>
              <Button component={Link} to="/employee" sx={{ color: '#333', textTransform: 'uppercase', marginRight: '15px' }}>
                Create Employee
              </Button>
              <Button component={Link} to="/list" sx={{ color: '#333', textTransform: 'uppercase', marginRight: '15px' }}>
                Employee List
              </Button>
              <Typography variant="h6" color="secondary" sx={{ marginLeft: 2 }}>
                {name} {lname}
              </Typography>
            </>
          ) : (
            <Button component={Link} to="/login" sx={{ color: '#333', textTransform: 'uppercase' }}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
