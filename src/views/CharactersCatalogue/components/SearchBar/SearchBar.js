import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';

import { SearchBarInput } from './searchBar.css';

const SearchBar = ({ setSearchQuery, setPageNumber }) => {
  const [currentQuery, setCurrentQuery] = useState('');

  const saveCahnges = useCallback(
    debounce((nextValue) => {
      setPageNumber(1);
      setSearchQuery(nextValue);
    }, 1000),
    []
  );

  const handleChange = (e) => {
    setCurrentQuery(e.target.value);
    saveCahnges(e.target.value);
  };

  return (
    <div>
      <SearchBarInput
        type="text"
        onChange={handleChange}
        value={currentQuery}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
