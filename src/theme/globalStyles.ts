import { createGlobalStyle } from 'styled-components';
import theme from '.';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
}

 

body {
  display: flex;
  margin: 5% 15%;
  font-family: sans-serif;
  background: ${theme.colors.white};
}

input {
  padding: 10px;
}

select {
  padding: 10px;
}

button {
    cursor: pointer;
}

`;

export default GlobalStyle;
