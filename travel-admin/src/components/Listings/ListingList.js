// src/components/Listings/ListingList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';

const ListingList = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listingCollection = await db.collection('listings').get();
      setListings(listingCollection.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    };
    fetchListings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await db.collection('listings').doc(id).delete();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Listings</h1>
      <Link to="/add-listing"><button>Add Listing</button></Link>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            {listing.placeName} - {listing.pricePerNight} per night
            <Link to={`/edit-listing/${listing.id}`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(listing.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingList;
