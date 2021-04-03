import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ElementBox = styled.div`
  color: rgb(170, 170, 170);
  height: 200px;
  /* max-width: 400px; */
  min-width: 250px;
  width:auto;
  padding: 10px;
  margin-bottom: 10px;
  justify-content: center;
  display: flex;
  list-style-type: none;
  flex-direction: column;
  gap: 10px;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(100, 100, 100, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 0.4em;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #ffc500;
  padding: 30px 50px 0 50px;
`;
