import { Button, Checkbox, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const AddEmployee = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  const [take, setTake] = useState({
    Name: '',
    Email: '',
    MobNo: '',
    Designation: '',
    Gender: '',
    Course: []
  });
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('http://localhost:3015/view', { params: { Email: userId } });
      console.log("Data received", response.data);
      setTake({
        Name: response.data.Name,
        Email: '',  // Clear Email field value
        MobNo: '',  // Clear MobNo field value
        Designation: response.data.Designation || '',
        Gender: response.data.Gender || '',
        Course: response.data.Course || []
      });
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3015/addemp';

    try {
      const response = await axios.post(url, take);
      console.log("Emp data added", take);
      navigate('/success');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTake(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setTake(prevState => ({
      ...prevState,
      Course: checked
        ? [...prevState.Course, name]
        : prevState.Course.filter(course => course !== name)
    }));
  };

  const handleGenderChange = (e) => {
    setTake(prevState => ({ ...prevState, Gender: e.target.value }));
  };

  const backgroundStyle = {
    backgroundImage: 'url("./images/createblog.png")',
    backgroundSize: 'cover',
    padding: '5px 0',
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '2% 30%',
      padding: '22px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#e5ebe4'
    },
    heading: {
      textAlign: 'left',
      color: '#333',
      padding: '5px'
    }
  };


  
  return (
    <div style={backgroundStyle}>
      <div style={styles.container}>
        <Typography variant='h5' style={styles.heading}>Add Employee Details</Typography>
        <br />
        <TextField label="Name" variant="filled" name="Name" required onChange={handleChange} value={take.Name} />
        <br /><br />
        <TextField label="Email" variant="filled" name="Email" required onChange={handleChange} value={''} /> {/* Removed pre-filled value */}
        <br /><br />
        <TextField label="Mob no" variant="filled" name="MobNo" required onChange={handleChange} value={''} /> {/* Removed pre-filled value */}
        <br /><br />

        {/* Dropdown select */}
        <TextField
          select
          label="Designation"
          name="Designation"
          variant="filled"
          value={take.Designation}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          fullWidth
        >
          <option value="       " disabled>Select Designation</option>
          <option value="------------------  ">   </option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </TextField>

        <br /><br />
        <Typography variant="h6">Gender:</Typography>
        {/* Radio buttons for gender */}
        <RadioGroup
          name="Gender"
          value={take.Gender}
          onChange={handleGenderChange}
          row
        >
          <FormControlLabel
            control={<Radio value="Male" />}
            label="Male"
          />
          <FormControlLabel
            control={<Radio value="Female" />}
            label="Female"
          />
        </RadioGroup>

        <br />
        <Typography variant="h6">Select Courses:</Typography>
        <FormControlLabel
          control={<Checkbox name="MCA" checked={take.Course.includes("MCA")} onChange={handleCheckboxChange} />}
          label="MCA"
        />
        <FormControlLabel
          control={<Checkbox name="BCA" checked={take.Course.includes("BCA")} onChange={handleCheckboxChange} />}
          label="BCA"
        />
        <FormControlLabel
          control={<Checkbox name="BCS" checked={take.Course.includes("BCS")} onChange={handleCheckboxChange} />}
          label="BCS"
        />

        <br /><br />
        <FormControlLabel
          control={<Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />}
          label="I agree to the terms and conditions"
        />

        <Button variant='contained' onClick={handlePublish} disabled={!isChecked}>Submit</Button>
        <br /><br />
      </div>
    </div>
  );
};

export default AddEmployee;
