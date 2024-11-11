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

  // Inline styling for black and yellow theme
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#333', // Dark black background
      color: '#f4d03f', // Light yellow text color
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    welcomeText: {
      fontSize: '2.5em',
      fontWeight: 'bold',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#555', // Slightly lighter shade for emphasis
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.welcomeText}>
        <h2>Welcome, {name} {lname}!</h2>
      </div>
    </div>
  );
}

export default Profile;
