import React, { useState } from 'react';
import Navbar from './Navbar';
import './Fromss.css';

function LoginAlumni() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Login Data:', formData);
  };

  return (
    <div>
      <Navbar />
      
      <form className="forms" onSubmit={handleSubmit}>
      <center><h1>Alumni Login</h1></center>
      <div className="container">
        
          <div className="form-row">
            <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label>Password</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        </div>
        </div>
        <div className="submit">
        <button type="submit">Login</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default LoginAlumni;