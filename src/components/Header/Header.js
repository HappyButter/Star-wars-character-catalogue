import React from 'react';
import { Navigation } from 'components/Navigation';
import { HeaderContent, CustomHeader, Logo } from './header.css';

const Header = () => {
  return (
    <CustomHeader>
      <HeaderContent>
        <Logo height={80} width={150} />
        <Navigation />
      </HeaderContent>
    </CustomHeader>
  );
};

export default Header;
