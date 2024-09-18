import React, { useState } from 'react';
import Navbar from './Navbar';
import './Forms.css';

// OtpVerification.js


function OtpVerification() {
  const [otp, setOtp] = useState(['', '', '', '']); // Array to hold OTP values

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    // Move to the next input if the current one is filled
    if (e.target.value.length === 1 && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification functionality here
    console.log('OTP Entered:', otp.join(''));
  };

  return (
    <div className="otp-container">
        <Navbar />
      <h2>Verify the Phone Number</h2>
      <div className="otp-image">
        <img src="hmm.jpeg" alt="OTP Icon" width="70px" height="100px" />
      </div>
      <p>Enter your OTP</p>

      <form onSubmit={handleSubmit}>
        <div className="otp-inputs">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              id={`otp-${index}`}
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e, index)}
              autoFocus={index === 0} // Autofocus on the first input
            />
          ))}
        </div>
        <button type="submit" className="verify-btn">Verify</button>
      </form>

      <div className="otp-footer">
        <a href="#" className="resend-link">Resend code</a>
        <a href="#" className="change-number-link">Change number</a>
      </div>
    </div>
  );
}

export default OtpVerification;
