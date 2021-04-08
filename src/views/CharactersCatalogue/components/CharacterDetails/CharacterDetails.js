// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CharacterDetailsWrapper } from './characterDetails.css';

const CharacterDetails = ({ characters, allFilmList }) => {
  const { index } = useParams();
  const [movieList, setMovieList] = useState([]);

  const characterData = characters.find(
    (character) => character.index === Number(index)
  );

  const mapFilms = (characterData, allFilmList) => {
    const filmsCharacterBeenIn = characterData.filmList.map(
      (characterFilmURL) =>
        allFilmList.find((film) => film.url === characterFilmURL)
    );

    setMovieList(filmsCharacterBeenIn || []);
  };

  useEffect(() => {
    if (allFilmList) {
      mapFilms(characterData, allFilmList);
    }
  }, [allFilmList]);

  return (
    <CharacterDetailsWrapper>
      <h1 style={{ color: 'white' }}>{characterData.name}</h1>
      <hr />
      <br />
      <p>Gender: {characterData.gender}</p>
      <p>Birth Year: {characterData.birthYear}</p>
      <p>Height: {characterData.height}</p>
      <p>Eye Color: {characterData.eyeColor}</p>
      <p>Hair Color: {characterData.hairColor}</p>
      <p>Skin Color: {characterData.skinColor}</p>
      <br />
      <hr />
      <br />
      <h3 style={{ color: 'white' }}>Film lsit:</h3>
      <br />
      {movieList.map((movie, index) => (
        <p key={index}>{movie ? movie.title : ''}</p>
      ))}
    </CharacterDetailsWrapper>
  );
};

export default CharacterDetails;
