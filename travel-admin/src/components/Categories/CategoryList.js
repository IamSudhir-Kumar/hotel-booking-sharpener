// src/components/Categories/CategoryList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryCollection = await db.collection('categories').get();
      setCategories(categoryCollection.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    };
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await db.collection('categories').doc(id).delete();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Categories</h1>
      <Link to="/add-category"><button>Add Category</button></Link>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}
            <Link to={`/edit-category/${category.id}`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
