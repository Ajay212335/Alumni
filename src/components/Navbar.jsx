import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './----------.png'
import './Navbar.css';

function Navbar() {
  const [registerDropdown, setRegisterDropdown] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);

  return (
    <nav className="navbar">
      <ul>
        <img className="logo" style={{ width: 400, height: 200 , backgroundRepeat: "no-repeat"}} src={logo} alt="logo" />
        <li><Link to="/" className="vv">Home</Link></li>
        <li 
          onMouseEnter={() => setRegisterDropdown(true)} 
          onMouseLeave={() => setRegisterDropdown(false)}
        >
          Register
          {registerDropdown && (
            <div className="dropdown">
              <Link to="/register/admin">Admin</Link>
              <Link to="/register/alumni">Alumni</Link>
              <Link to="/register/hod">HOD</Link>
              <Link to="/register/student">Student</Link>
              <Link to="/register/faculty">Faculty</Link>
            </div>
          )}
        </li>
        <li 
          onMouseEnter={() => setLoginDropdown(true)} 
          onMouseLeave={() => setLoginDropdown(false)}
        >
          Login
          {loginDropdown && (
            <div className="dropdown">
              <Link to="/login/admin">Admin</Link>
              <Link to="/login/alumni">Alumni</Link>
              <Link to="/login/hod">HOD</Link>
              <Link to="/login/student">Student</Link>
              <Link to="/login/faculty">Faculty</Link>
            </div>
          )}
        </li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
