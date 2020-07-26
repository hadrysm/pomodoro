import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
 *, *::after, *::before{
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html{
  font-size: 62.5%;
}

body{
  margin:0;
  padding:0;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1.6rem;
  overflow-y: scroll;
}

::-webkit-scrollbar {
      width: 4px; 

      @media(min-width:960px) {
          width: 10px;
        }
    }
`;

export default GlobalStyled;
