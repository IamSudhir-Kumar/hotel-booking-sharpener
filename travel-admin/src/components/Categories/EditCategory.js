// src/components/Categories/EditCategory.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { useParams, useNavigate } from 'react-router-dom';

const EditCategory = () => {
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      const categoryDoc = await db.collection('categories').doc(id).get();
      setCategoryName(categoryDoc.data().name);
    };
    fetchCategory();
  }, [id]);

  const handleEditCategory = async (e) => {
    e.preventDefault();
    try {
      await db.collection('categories').doc(id).update({
        name: categoryName,
      });
      history.push('/categories');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Edit Category</h1>
      <form onSubmit={handleEditCategory}>
        <input 
          type="text" 
          placeholder="Category Name" 
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)} 
          required 
        />
        <button type="submit">Edit Category</button>
      </form>
    </div>
  );
};

export default EditCategory;
