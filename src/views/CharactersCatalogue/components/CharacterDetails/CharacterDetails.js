import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CharacterDetailsWrapper } from './characterDetails.css';

const CharacterDetails = ({ characters }) => {
  const { index } = useParams();
  const [filmNames, setFilmNames] = useState([]);

  const characterData = characters[index];
  const filmLinksList = characterData.filmList;

  const getFilmNames = async (filmLinksList) => {
    for (const link of filmLinksList) {
      axios(link)
        .then((res) => {
          setFilmNames((prevFilmNames) => [...prevFilmNames, res.data.title]);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    getFilmNames(filmLinksList);
  }, [filmLinksList]);

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
        <p key={index}>{filmName}</p>
      ))}
    </CharacterDetailsWrapper>
  );
};

export default CharacterDetails;
