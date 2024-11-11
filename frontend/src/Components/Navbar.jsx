import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import { useAuth } from '../AuthContext';
import axios from 'axios';

const Navbar = () => {
  const { authenticated, setAuthenticated, setUserId, userId } = useAuth();
  const [name, setName] = useState("Guest");
  const [lname, setLname] = useState("User");
  
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:3015/view`, { params: { Email: userId } });
          console.log(response);
          setProfileData(response.data);
          setName(response.data.FirstName);
          setLname(response.data.LastName);
        } catch (error) {
          console.log("Error fetching profile data:", error);
        }
      }
    };
    fetchData();
  }, [userId]);

  // Handle navigation when the "Home" button is clicked
  const handleHomeClick = () => {
    navigate('/profile');  // Navigate to the profile page
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#c5d1d0' }}>
        <Toolbar>
          <img src="./src/assets/logo2.png" alt="logo" width="80px" />
          <Typography variant="h6" color="black" component="div" sx={{ flexGrow: 1 }}>
           DD Constructions
          </Typography>
          
          {authenticated ? (
            <>
              <Button color="inherit" onClick={handleHomeClick}>Home</Button> {/* Home Button now navigates to profile */}
              <Button component={Link} to="/employee" style={{ textDecoration: "none", color: "white" }}>
                Create Employee
              </Button>
              <Button component={Link} to="/list" style={{ textDecoration: "none", color: "white" }}>
                Employee List
              </Button>
              <Typography variant="h6" color="secondary" sx={{ marginLeft: 2 }}>
                {name} {lname}
              </Typography>
            </>
          ) : (
            <Button component={Link} to="/login" style={{ textDecoration: "none", color: "black" }}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
