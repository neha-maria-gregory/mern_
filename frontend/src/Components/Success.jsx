import React from "react";

const Success = () => {
  return (
    <div style={styles.container}>
      <div style={styles.alertBox}>
        <h1 style={styles.heading}>Employee Data Added Successfully</h1>
        <img
          src="./src/assets/download.png"  // Replace with your image URL
          alt="Success"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#e8f5e9", // Light green background
  },
  alertBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    border: "1px solid #c8e6c9", // Green border for success indication
    borderRadius: "8px",
    padding: "20px 40px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for card effect
    textAlign: "center",
    maxWidth: "400px",
  },
  heading: {
    color: "#4caf50",
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "15px",
  },
  image: {
    width: "80px",
    height: "80px",
    marginTop: "15px",
  },
};

export default Success;
