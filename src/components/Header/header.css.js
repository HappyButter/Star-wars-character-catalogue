import styled from 'styled-components';
import { ReactComponent } from 'images/logo.svg';

export const Logo = styled(ReactComponent)`
  padding-bottom: 5px;
`;

export const CustomHeader = styled.header`
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  height: 150px;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  padding: 0 10px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  max-width: 1200px;
  margin: 0 auto;
  display: block;
  justify-content: center;
  align-items: center;
`;
