import React from 'react';
import { ElementBox, CustomLink } from './characterListElement.css';

const CharacterListElement = ({ characterData }) => {
  return (
    <ElementBox>
      <h1 style={{ color: 'white' }}>{characterData.name}</h1>
      <p>Gender: {characterData.gender}</p>
      <p>Birth Year: {characterData.birthYear}</p>

      <CustomLink to={`/characters/${characterData.index}`}>
        Read more
      </CustomLink>
    </ElementBox>
  );
};

export default CharacterListElement;
