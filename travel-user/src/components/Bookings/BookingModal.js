// src/components/Bookings/BookingModal.js
import React, { useState } from 'react';
import { db } from '../../firebase';

const BookingModal = ({ listing, onClose }) => {
  const [userEmail, setUserEmail] = useState('');
  const [status, setStatus] = useState('pending');

  const handleBookNow = async (e) => {
    e.preventDefault();
    try {
      await db.collection('bookings').add({
        placeName: listing.placeName,
        userEmail,
        status,
      });
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleBookNow}>
        <h2>Book {listing.placeName}</h2>
        <input 
          type="email" 
          placeholder="Your Email" 
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)} 
          required 
        />
        <button type="submit">Book Now</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default BookingModal;
