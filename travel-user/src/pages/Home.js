// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

const Home = () => {
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

  return (
    <div className="container">
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
