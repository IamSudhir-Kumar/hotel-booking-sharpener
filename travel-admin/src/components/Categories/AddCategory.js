// src/components/Categories/AddCategory.js
import React, { useState } from 'react';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const history = useNavigate();

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      await db.collection('categories').add({
        name: categoryName,
      });
      history.push('/categories');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Add Category</h1>
      <form onSubmit={handleAddCategory}>
        <input 
          type="text" 
          placeholder="Category Name" 
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)} 
          required 
        />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
