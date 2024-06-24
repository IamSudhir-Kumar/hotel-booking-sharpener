// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Travel Website</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
