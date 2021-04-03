import React, { useState } from 'react';

import { CharacterList } from './components/CharacterList';
import { SearchBar } from './components/SearchBar';

const CharactersCatalogue = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      <SearchBar
        setSearchQuery={setSearchQuery}
        setPageNumber={setPageNumber}
      />
      <CharacterList
        searchQuery={searchQuery}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default CharactersCatalogue;
