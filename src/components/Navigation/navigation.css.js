import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  padding: 10px 0;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  justify-content: center;
  align-items: center;
  display: flex;
  list-style-type: none;
`;

export const Link = styled(NavLink)`
  padding: 1rem 1.5rem;
  font-size: 1rem;
  color: #aaa;
  text-decoration: none;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
`;
