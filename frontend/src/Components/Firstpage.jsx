import React from "react";
import "./Firstpage.css"; // Optional for custom styling

const FirstPage = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Logo</div>
        <button className="nav-button">Home</button>
        <button className="nav-button">Employee List</button>
        <span className="name">Your Name</span>
      </nav>

      {/* Dashboard */}
      <div className="dashboard">
        <h1>Welcome Man</h1>
      </div>
    </div>
  );
};

export default FirstPage;
