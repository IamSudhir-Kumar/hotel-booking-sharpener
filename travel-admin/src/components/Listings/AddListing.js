// src/components/Listings/AddListing.js
import React, { useState } from 'react';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const AddListing = () => {
  const [placeName, setPlaceName] = useState('');
  const [pricePerNight, setPricePerNight] = useState('');
  const [placeAddress, setPlaceAddress] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const history = useNavigate();

  const handleAddListing = async (e) => {
    e.preventDefault();
    try {
      await db.collection('listings').add({
        placeName,
        pricePerNight,
        placeAddress,
        city,
        pinCode,
        images,
        category,
      });
      history.push('/listings');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <div className="container">
      <h1>Add Listing</h1>
      <form onSubmit={handleAddListing}>
        <input 
          type="text" 
          placeholder="Place Name" 
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Price Per Night" 
          value={pricePerNight}
          onChange={(e) => setPricePerNight(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Place Address" 
          value={placeAddress}
          onChange={(e) => setPlaceAddress(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="City" 
          value={city}
          onChange={(e) => setCity(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="PIN Code" 
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)} 
          required 
        />
        <input 
          type="file" 
          multiple 
          onChange={handleImageChange} 
          required 
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="Villa">Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="Houseboat">Houseboat</option>
        </select>
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
};

export default AddListing;
