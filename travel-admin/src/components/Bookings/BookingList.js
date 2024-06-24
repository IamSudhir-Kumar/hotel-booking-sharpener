// src/components/Bookings/BookingList.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const bookingCollection = await db.collection('bookings').get();
      setBookings(bookingCollection.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    };
    fetchBookings();
  }, []);

  const handleApprove = async (id) => {
    try {
      await db.collection('bookings').doc(id).update({ status: 'completed' });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleReject = async (id) => {
    try {
      await db.collection('bookings').doc(id).delete();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Bookings</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.placeName} - {booking.userEmail} - {booking.status}
            <button onClick={() => handleApprove(booking.id)}>Approve</button>
            <button onClick={() => handleReject(booking.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
