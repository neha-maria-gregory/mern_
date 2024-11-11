import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './AuthContext';
import Home from './Components/Home';
import Profile from './Components/Profile';
import AddEmployee from './Components/AddEmployee';
import Success from './Components/Success';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <AuthProvider>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/employee" element={<AddEmployee/>}/>
       <Route path="/success" element={<Success/>}/>
       </Routes>
       </AuthProvider>
    </>
  );
}

export default App;