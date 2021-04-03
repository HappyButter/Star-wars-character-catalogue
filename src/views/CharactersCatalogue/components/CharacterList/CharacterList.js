import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Loader } from 'components';

import CharacterListElement from './CharacterListElement';
import { ListWrapper } from './characterList.css';

import { Modal } from '../Modal';
import { CharacterDetails } from '../CharacterDetails';



const CharacterList = ({ searchQuery, pageNumber, setPageNumber }) => {
  const [characters, setCharacters] = useState([]);
  const [hasMoreCharacters, setHasMoreCharacters] = useState(false);

  const mapCharacter = (character, index) => {
    return {
      name: character.name,
      gender: character.gender,
      birthYear: character.birth_year,
      eyeColor: character.eye_color,
      hairColor: character.hair_color,
      skinColor: character.skin_color,
      height: character.height,
      filmList: character.films,
      index,
    };
  };

  const getMoreCharacters = async (nextPage, query) => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'https://swapi.dev/api/people/',
        params: { search: query, page: nextPage },
      });

      const fetchedCharacters = data.results.map((character, index) =>
        mapCharacter(character, index)
      );
      setCharacters((prevCharacters) => [
        ...prevCharacters,
        ...fetchedCharacters,
      ]);

      if (data.next !== null) {
        setHasMoreCharacters(true);
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      } else {
        setHasMoreCharacters(false);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    setCharacters([]);
    getMoreCharacters(pageNumber, searchQuery);
  }, [searchQuery]);

  return (
    <ListWrapper>
      <InfiniteScroll
        dataLength={characters.length}
        next={() => getMoreCharacters(pageNumber, searchQuery)}
        hasMore={hasMoreCharacters}
        loader={<Loader />}>
        {characters.map((character, index) => (
          <CharacterListElement characterData={character} key={index} />
        ))}
      </InfiniteScroll>

      <Switch>
        <Route path="/characters/:index">
          <Modal>
            <CharacterDetails characters={characters} />
          </Modal>
        </Route>
      </Switch>
    </ListWrapper>
  );
};

export default CharacterList;
