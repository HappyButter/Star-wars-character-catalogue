import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #000;
  }
`;

export const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 150px;
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 20px;
`;
