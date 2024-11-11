import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to DD Constructions</h1>
      <p style={styles.subheading}>
        Building the Future, Restoring the Past
      </p>
     
      <p style={styles.description}>
        At DD Constructions, we are dedicated to delivering top-quality construction services, combining innovation with experience to create lasting structures. Explore our services and let’s build something remarkable together.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    padding: "20px",
    textAlign: "center",
    backgroundImage: "url('/src/assets/civil.jpg')",  // Replace with your background image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#ffffff",  // Adjust text color for readability
  },
  heading: {
    color: "#ffffff",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",  // Text shadow for better readability
  },
  subheading: {
    color: "#ffeb3b",  // A lighter yellow for contrast
    fontSize: "1.5rem",
    marginBottom: "20px",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
  },
  image: {
    width: "300px",
    height: "auto",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  description: {
    color: "#ffffff",
    fontSize: "1rem",
    maxWidth: "600px",
    lineHeight: "1.6",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)", // For readability
  },
};

export default Home;
