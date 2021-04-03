// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CharacterDetailsWrapper } from './characterDetails.css';


const CharacterDetails = ({ characters, filmList }) => {
  const { index } = useParams();
  const [filmNames, setFilmNames] = useState([]);

  const characterData = characters.find(character => character.index === Number(index));

  const mapFilms = (characterData, filmList) => {
    const filmsCharacterBeenIn = characterData.filmList.map(
      (characterFilmURL) =>
        filmList.find((film) => film.url === characterFilmURL)
    );

    setFilmNames(filmsCharacterBeenIn);
  };

  useEffect(() => {
    mapFilms(characterData, filmList);
  }, []);

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
      {filmNames.map((filmName, index) => (
        <p key={index}>{filmName.title}</p>
      ))}
    </CharacterDetailsWrapper>
  );
};

export default CharacterDetails;
