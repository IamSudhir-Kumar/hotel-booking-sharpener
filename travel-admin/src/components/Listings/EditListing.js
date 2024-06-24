// src/components/Listings/EditListing.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { useParams, useNavigate} from 'react-router-dom';

const EditListing = () => {
  const { id } = useParams();
  const [placeName, setPlaceName] = useState('');
  const [pricePerNight, setPricePerNight] = useState('');
  const [placeAddress, setPlaceAddress] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const fetchListing = async () => {
      const listingDoc = await db.collection('listings').doc(id).get();
      const listingData = listingDoc.data();
      setPlaceName(listingData.placeName);
      setPricePerNight(listingData.pricePerNight);
      setPlaceAddress(listingData.placeAddress);
      setCity(listingData.city);
      setPinCode(listingData.pinCode);
      setImages(listingData.images);
      setCategory(listingData.category);
    };
    fetchListing();
  }, [id]);

  const handleEditListing = async (e) => {
    e.preventDefault();
    try {
      await db.collection('listings').doc(id).update({
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
      <h1>Edit Listing</h1>
      <form onSubmit={handleEditListing}>
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
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="Villa">Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="Houseboat">Houseboat</option>
        </select>
        <button type="submit">Edit Listing</button>
      </form>
    </div>
  );
};

export default EditListing;
