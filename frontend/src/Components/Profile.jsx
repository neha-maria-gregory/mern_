import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';

const Profile = () => {
  const [name, setName] = useState("Guest");
  const [lname, setLname] = useState("User");
  const { userId } = useAuth();
  const [profileData, setProfileData] = useState(null);

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

  // Inline styling for professional grey and yellow theme
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#dcdcdc', // Grey background
      color: '#f4d03f', // Light yellow text color
      fontFamily: 'Helvetica, Arial, sans-serif', // Modern font
      textAlign: 'center',
      padding: '20px',
    },
    welcomeText: {
      fontSize: '2.5em',
      fontWeight: 'bold',
      padding: '40px',
      borderRadius: '12px',
      backgroundColor: '#444', // Slightly lighter background for the text area
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', // Soft shadow for emphasis
      width: '80%',
      maxWidth: '600px', // Limiting width for better appearance
      lineHeight: '1.5',
    },
    heading: {
      margin: '0',
      fontSize: '1.2em',
      color: '#fff', // White color for the heading text
    },
    nameText: {
      fontSize: '1.8em',
      color: '#f9e079', // Light yellow color for the name
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.welcomeText}>
        <h2 style={styles.heading}>Welcome to your profile,</h2>
        <p style={styles.nameText}>{name} {lname}!</p>
      </div>
    </div>
  );
}

export default Profile;
