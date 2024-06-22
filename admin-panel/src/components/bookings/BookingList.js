import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings, approveBooking } from '../../redux/bookingSlice';

const BookingList = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.items);
  const loading = useSelector((state) => state.bookings.loading);
  const error = useSelector((state) => state.bookings.error);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const handleApprove = (id) => {
    dispatch(approveBooking(id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bookings</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} className="mb-4 p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">Booking for: {booking.placeName}</h3>
            <p>Booked by: {booking.userName}</p>
            <p>For: {booking.numberOfDays} days</p>
            <p>Status: {booking.status}</p>
            {booking.status === 'pending' && (
              <button
                onClick={() => handleApprove(booking.id)}
                className="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium mt-2"
              >
                Approve
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
