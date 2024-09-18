import React, { useState } from 'react';
import Navbar from './Navbar';
import './Forms.css';


function RegisterFaculty() {
  const [formData, setFormData] = useState({
    facultyName: '',
    collegeName: '',
    collegeCode: '',
    department: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Faculty Registration Data:', formData);
    // You can add form validation or API calls here
  };

  return (
    <div >
      <Navbar/>
      <form className="form" onSubmit={handleSubmit}>
      <h1><center>Faculty Registration</center></h1>
      <div className="container">
        
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="facultyName">Faculty Name</label>
              <input
                type="text"
                id="facultyName"
                name="facultyName"
                value={formData.facultyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="collegeName">College Name</label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="collegeCode">College Code</label>
              <input
                type="text"
                id="collegeCode"
                name="collegeCode"
                value={formData.collegeCode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="submit">
            <button type="submit" className="button">Register</button>
          </div>
          </div>
        </form>
      </div>
    

  );
}

export default RegisterFaculty;