import { createGlobalStyle  } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: #eee;
}

button,
input{
  outline: 0;
}

button {
  cursor: pointer;
}

`;