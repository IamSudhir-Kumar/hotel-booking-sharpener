// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ListingPage from './pages/ListingPage';
import { AuthProvider } from './context/AuthContext';
import './styles.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/category/:id" component={CategoryPage} />
          <Route path="/listing/:id" component={ListingPage} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
