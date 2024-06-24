// src/pages/ListingPage.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';
import BookingModal from '../components/Bookings/BookingModal';

const ListingPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const fetchListing = async () => {
      const listingDoc = await db.collection('listings').doc(id).get();
      setListing(listingDoc.data());
    };
    fetchListing();
  }, [id]);

  return (
    <div className="container">
      {listing && (
        <>
          <h1>{listing.placeName}</h1>
          <p>Price per night: {listing.pricePerNight}</p>
          <p>Address: {listing.placeAddress}, {listing.city} - {listing.pinCode}</p>
          <div>
            {listing.images.map((image, index) => (
              <img key={index} src={image} alt={`Listing ${index}`} />
            ))}
          </div>
          <button onClick={() => setShowBookingModal(true)}>Book Now</button>
          {showBookingModal && (
            <BookingModal listing={listing} onClose={() => setShowBookingModal(false)} />
          )}
        </>
      )}
    </div>
  );
};

export default ListingPage;
