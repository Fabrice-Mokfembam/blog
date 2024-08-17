import React from 'react';
import './Search.scss';
import { FaSearch } from 'react-icons/fa';

function Search() {
  return (
    <div className="search-container">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search for blogs..." />
      </div>
    </div>
  );
}

export default Search;
