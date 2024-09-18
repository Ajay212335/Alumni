import React from 'react';
import Navbar from './Navbar';
import './Home.css';
function Home() {
  return (
    <div>
      <Navbar />
      <div className="center">
        <center><h1>Gujarat</h1>
        <h2>Government College of Alumni </h2>
        <h2>Management System </h2></center>
        <div className="buttons">
          <button className="btn-register">Register</button>
          <button className="btn-login">Login</button>
        </div>
      </div>
      </div>
  );
}

export default Home;
