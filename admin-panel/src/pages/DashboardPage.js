import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import CategoryList from '../components/categories/CategoryList';
import CategoryForm from '../components/categories/CategoryForm';
import ListingList from '../components/listings/ListingList';
import ListingForm from '../components/listings/ListingForm';
import BookingList from '../components/bookings/BookingList';

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <Routes>
            <Route path="/categories" component={CategoryList} />
            <Route path="/add-category" component={CategoryForm} />
            <Route path="/listings" component={ListingList} />
            <Route path="/add-listing" component={ListingForm} />
            <Route path="/bookings" component={BookingList} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
