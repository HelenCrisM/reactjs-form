import { createGlobalStyle } from 'styled-components';
import theme from '.';

const GlobalStyle = createGlobalStyle`
* {
  margin: 25px 0;
}

 

body {
  display: flex;
  margin: 0 10%;
  font-family: sans-serif;
  background: ${theme.colors.white};
}


button {
    cursor: pointer;
}

`;

export default GlobalStyle;
