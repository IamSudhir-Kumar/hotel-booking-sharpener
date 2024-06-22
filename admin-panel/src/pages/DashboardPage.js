import React from 'react';
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import { Switch, Route } from 'react-router-dom';
import CategoryList from '../components/Categories/CategoryList';
import CategoryForm from '../components/Categories/CategoryForm';
import ListingList from '../components/Listings/ListingList';
import ListingForm from '../components/Listings/ListingForm';
import BookingList from '../components/Bookings/BookingList';

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <Switch>
            <Route path="/categories" component={CategoryList} />
            <Route path="/add-category" component={CategoryForm} />
            <Route path="/listings" component={ListingList} />
            <Route path="/add-listing" component={ListingForm} />
            <Route path="/bookings" component={BookingList} />
            <Route path="/" exact component={() => <h1>Dashboard</h1>} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
