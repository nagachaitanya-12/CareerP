import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignInSignUp from './components/SignInSignUp';
import About from './components/About';
import Offerings from './components/Offerings';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Modal from './components/Modal'; // Import the Modal component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setModalMessage('Login Successful');
    setShowModal(true);
  };

  const handleSignup = () => {
    setModalMessage('Sign Up Successful. Redirecting to Login...');
    setShowModal(true);
    // Optionally, you can implement a redirect after a timeout here
    setTimeout(() => {
      setShowModal(false);
      setIsLoggedIn(false); // Redirecting to a login state or another page can be done here.
    }, 2000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<SignInSignUp onLogin={handleLogin} onSignup={handleSignup} />} />
        <Route path="/logout" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
