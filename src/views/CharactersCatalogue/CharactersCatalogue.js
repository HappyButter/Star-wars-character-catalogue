import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Loader } from 'components';

import { CharacterList } from './components/CharacterList';
import { SearchBar } from './components/SearchBar';


const CharactersCatalogue = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [filmList, setFilmList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const mapFilm = (filmData) => {
    const characterIdList = filmData.characters.map((characterLink) =>
      characterLink.match(/\d+/g).map(Number)
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
      setIsLoading(true);
      const { data : { results } = [] } = await axios.get('https://swapi.dev/api/films/');

      const filmsMapped = results.map(mapFilm);
      setFilmList(filmsMapped);
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFilmList();
  }, []);
  
  if (isLoading) return <Loader/>;

  return (
    <>
      <SearchBar
        setSearchQuery={setSearchQuery}
        setPageNumber={setPageNumber}
      />
      <CharacterList
        searchQuery={searchQuery}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        allFilmList={filmList}
      />
    </>
  );
};

export default CharactersCatalogue;
