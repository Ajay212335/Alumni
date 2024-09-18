import React, { useState } from 'react';
import Navbar from './Navbar';
import './Form.css';

function RegisterAdmin() {
  const [formData, setFormData] = useState({
    name: '',
        collegeName: '',
        collegeCode: '',
        email: '',
        collegeWebsite: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, like sending data to the backend
    console.log('Admin Registration Data:', formData);

  };

  return (
    <div>
      <Navbar />
      
      <form className="form" onSubmit={handleSubmit}>
      <center><h1>Admin Registration</h1></center>
        <div className='container'>
          <div className='from-row'>
                <div className='form-group'>
                    <label>Admin Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>College Name</label>
                    <input
                        type="text"
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>College Code</label>
                    <input
                        type="text"
                        name="collegeCode"
                        value={formData.collegeCode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'> 
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>College Website</label>
                    <input
                        type="url"
                        name="collegeWebsite"
                        value={formData.collegeWebsite}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
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
        <button type="submit">Register</button>
        
      </div>  
      </form>
    </div>
  );
}

export default RegisterAdmin;
