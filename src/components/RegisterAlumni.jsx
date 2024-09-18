import React, { useState } from 'react';
import Navbar from './Navbar';
import './Forms.css';

function RegisterAlumni() {
  


  const [formData, setFormData] = useState({
    name: '',
    collegeName: '',
    registerNumber: '',
    email: '',
    collegeCode: '',
    phoneNumber: '',
    department: '',
    passedOutYear: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Alumni Registration Data:', formData);
  };

  return (
    <div >
      <Navbar />
      
      <form className="form" onSubmit={handleSubmit}>
      <center><h1>Alumni Registration</h1></center>
        <div className="container">
          <div className="form-row">
            <div className="form-group">
              <label>Alumni Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>College Name</label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Register Number</label>
              <input
                type="text"
                name="registerNumber"
                value={formData.registerNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>College Code</label>
              <input
                type="text"
                name="collegeCode"
                value={formData.collegeCode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Passed Out Year</label>
              <input
                type="text"
                name="passedOutYear"
                value={formData.passedOutYear}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          </div>
          <div className="submit">
            <button type="submit">Register</button>
          </div>
        
      </form>
    </div>
  );
};



export default RegisterAlumni;
