// src/pages/CategoryPage.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useParams, Link } from 'react-router-dom';

const CategoryPage = () => {
  const { id } = useParams();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listingCollection = await db.collection('listings').where('category', '==', id).get();
      setListings(listingCollection.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    };
    fetchListings();
  }, [id]);

  return (
    <div className="container">
      <h1>Listings</h1>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <Link to={`/listing/${listing.id}`}>
              {listing.placeName} - {listing.pricePerNight} per night
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
