import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ searchString, placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type={'search'}
      placeholder="Search item..."
      onChange={handleChange}
    />
  );
};
