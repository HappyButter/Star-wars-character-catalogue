import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CharacterList } from './components/CharacterList';
import { SearchBar } from './components/SearchBar';

const CharactersCatalogue = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [filmList, setFilmList] = useState([]);

  const mapFilm = (filmData) => {
    let characterIdList = [];

    filmData.characters.forEach((characterLink) =>
      characterIdList.push(characterLink.match(/\d+/g).map(Number))
    );

    return {
      title: filmData.title,
      id: filmData.episode_id,
      director: filmData.director,
      producer: filmData.producer,
      releaseDate: filmData.release_date,
      url: filmData.url,
      characterIdList,
    };
  };

  const getFilmList = async () => {
    try {
      const { data } = await axios('https://swapi.dev/api/films/');

      const filmsMapped = data.results.map(mapFilm);
      setFilmList(filmsMapped);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getFilmList();
  }, []);

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
        filmList={filmList}
      />
    </div>
  );
};

export default CharactersCatalogue;
