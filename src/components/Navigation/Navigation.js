import React from 'react';

import { NavList, Link } from './navigation.css';

const Navigation = () => {
  return (
    <>
      <NavList>
        <li key={1}>
          <Link to="/">Home</Link>
        </li>
        <li key={2}>
          <Link to="/characters">Characters</Link>
        </li>
      </NavList>
    </>
  );
};

export default Navigation;
