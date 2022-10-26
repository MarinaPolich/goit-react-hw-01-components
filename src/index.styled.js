import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #d9d7d7;
    padding: 40px;
    margin: 0 auto;
    text-align: center;
    font-size: 14px;
  }

  ul {
  list-style: none;
  padding: 0;
  }

  h1,
  h2,
  h3,
  p,
  ul,
  li {
    margin: 0;
  }

  .App {
    display: flex;           
    flex-direction: column; 
    justify-content: center;
    align-items: center;
  }
`;
