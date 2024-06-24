// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/LogIn';
import Dashboard from './components/Dashboard';
import AddCategory from './components/Categories/AddCategory';
import EditCategory from './components/Categories/EditCategory';
import CategoryList from './components/Categories/CategoryList';
import AddListing from './components/Listings/AddListing';
import EditListing from './components/Listings/EditListing';
import ListingList from './components/Listings/ListingList';
import BookingList from './components/Bookings/BookingList';
import { AuthProvider } from './context/AuthContext';
import './styles.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add-category" component={AddCategory} />
          <Route path="/edit-category/:id" component={EditCategory} />
          <Route path="/categories" component={CategoryList} />
          <Route path="/add-listing" component={AddListing} />
          <Route path="/edit-listing/:id" component={EditListing} />
          <Route path="/listings" component={ListingList} />
          <Route path="/bookings" component={BookingList} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
