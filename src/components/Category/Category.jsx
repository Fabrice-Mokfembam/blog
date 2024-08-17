import React from 'react';
import './Category.scss';

function Category() {
  const categories = [
    'Technology', 'Science', 'Food', 'Sports', 'Education', 
    'Health', 'Lifestyle', 'Travel', 'Fashion', 'Art'
  ];

  return (
    <div className="category-container">
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
