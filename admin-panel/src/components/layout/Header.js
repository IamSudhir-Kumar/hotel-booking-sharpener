import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <button onClick={handleLogout} className="text-red-500">Logout</button>
    </header>
  );
};

export default Header;
