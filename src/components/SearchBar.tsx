//components/SearBar.tsx
import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-input"
      type="text"
      value={value}
      placeholder="Rechercher un zizi…"
      onChange={onChange}
    />
  );
}

export default SearchBar;
