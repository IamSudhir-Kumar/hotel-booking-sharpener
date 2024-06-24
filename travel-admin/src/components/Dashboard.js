// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <Link to="/categories"><button>Manage Categories</button></Link>
      <Link to="/listings"><button>Manage Listings</button></Link>
      <Link to="/bookings"><button>Manage Bookings</button></Link>
    </div>
  );
};

export default Dashboard;