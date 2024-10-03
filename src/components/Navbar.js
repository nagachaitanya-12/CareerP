import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav>
      <div className="logo">
        <h1>Logithink</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/offerings">Offerings</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {!isLoggedIn ? (
          <li><Link to="/auth">Login</Link></li>
        ) : (
          <li><button onClick={onLogout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
