import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import RegisterAdmin from './components/RegisterAdmin';
import RegisterAlumni from './components/RegisterAlumni';
import RegisterHOD from './components/RegisterHOD';
import RegisterStudent from './components/RegisterStudent';
import RegisterFaculty from './components/RegisterFaculty';
import LoginAdmin from './components/LoginAdmin';
import LoginAlumni from './components/LoginAlumni'
import LoginHOD from './components/LoginHOD';
import LoginStudent from './components/LoginStudent';
import LoginFaculty from './components/LoginFaculty';
import OtpVerification from './components/Verify';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register/admin" element={<RegisterAdmin />} />
        <Route path="/register/alumni" element={<RegisterAlumni />} />
        <Route path="/register/hod" element={<RegisterHOD />} />
        <Route path="/register/student" element={<RegisterStudent />} />
        <Route path="/register/faculty" element={<RegisterFaculty />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/login/alumni" element={<LoginAlumni />} />
        <Route path="/login/hod" element={<LoginHOD />} />
        <Route path="/login/student" element={<LoginStudent />} />
        <Route path="/login/faculty" element={<LoginFaculty />} />
        <Route path="/verify" element={<OtpVerification />} />

      </Routes>
    </Router>
  );
}

export default App;
