
import './SignInSignUp.css';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal'; // Ensure this is the correct path to your Modal component

const SignInSignUp = ({ onLogin, onSignup }) => {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsSigningIn(!isSigningIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSigningIn) {
      onLogin();
    } else {
      onSignup();
      setModalMessage('Sign Up Successful. Redirecting to Sign In...');
      setShowModal(true);
    }
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        navigate('/auth'); // Redirect to Sign In page after 2 seconds
        setShowModal(false); // Hide modal
      }, 2000); // Wait for 2 seconds before redirecting

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [showModal, navigate]);

  return (
    <div className="auth-container">
      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
      <h2>{isSigningIn ? 'Sign In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isSigningIn && (
          <>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
          </>
        )}
        {isSigningIn && (
          <>
            <input type="email" placeholder="UserName/email" required />
            <input type="password" placeholder="Password" required />
          </>
        )}
        <button type="submit">{isSigningIn ? 'Login' : 'Submit'}</button>
      </form>
      <p>
        {isSigningIn
          ? "Don't have an account? "
          : 'Already have an account? '}
        <span onClick={toggleAuthMode}>
          {isSigningIn ? 'Sign up' : 'Sign in'}
        </span>
      </p>
    </div>
  );
};

export default SignInSignUp;
