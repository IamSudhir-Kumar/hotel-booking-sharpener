import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/authSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
