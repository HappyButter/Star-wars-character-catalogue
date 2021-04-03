import React from 'react';
import { StyledSpinner } from './loader.css';

const Loader = () => {
  return (
    <StyledSpinner>
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </StyledSpinner>
  );
};

export default Loader;
