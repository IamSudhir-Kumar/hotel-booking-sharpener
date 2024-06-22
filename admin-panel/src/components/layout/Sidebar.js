import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 min-h-screen">
      <nav className="mt-10">
        <Link
          to="/"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white text-gray-400"
        >
          Dashboard
        </Link>
        <Link
          to="/categories"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white text-gray-400"
        >
          Categories
        </Link>
        <Link
          to="/add-category"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white text-gray-400"
        >
          Add Category
        </Link>
        <Link
          to="/listings"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white text-gray-400"
        >
          Listings
        </Link>
        <Link
          to="/add-listing"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white text-gray-400"
        >
          Add Listing
        </Link>
        <Link
          to="/bookings"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white text-gray-400"
        >
          Bookings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
