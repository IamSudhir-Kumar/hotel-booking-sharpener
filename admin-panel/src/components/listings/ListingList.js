import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, deleteListing } from '../../redux/listingSlice';

const ListingList = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings.items);
  const loading = useSelector((state) => state.listings.loading);
  const error = useSelector((state) => state.listings.error);

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteListing(id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Listings</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {listings.map((listing) => (
          <li key={listing.id} className="mb-4 p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{listing.name}</h3>
            <p>{listing.address}</p>
            <p>{listing.pricePerNight} per night</p>
            <p>Category: {listing.category}</p>
            <button
              onClick={() => handleDelete(listing.id)}
              className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium mt-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingList;
