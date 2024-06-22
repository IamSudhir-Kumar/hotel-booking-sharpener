import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createListing } from '../../redux/listingSlice';

const ListingForm = () => {
  const [name, setName] = useState('');
  const [pricePerNight, setPricePerNight] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const listing = { name, pricePerNight, address, category, images };
    dispatch(createListing(listing));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Listing</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Place Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price Per Night</label>
        <input
          type="text"
          value={pricePerNight}
          onChange={(e) => setPricePerNight(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="Villa">Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="Houseboat">Houseboat</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Images</label>
        <input
          type="file"
          multiple
          onChange={(e) => setImages([...e.target.files])}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Add Listing
      </button>
    </form>
  );
};

export default ListingForm;
