import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-family: sans-serif;
    scroll-behavior: smooth;
    -webkit-user-drag: none; /* Dragable */
  }

  body {
    color: ${prop=>prop.theme.text};
    background-color: ${(props) => props.theme.background};;
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  #root{
    width: 100%;
    height: 100%;
  }

  /* Redefinindo estilos específicos para inputs */
  input {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    background-color: transparent;
  }

  /* Redefinindo estilos específicos para botões */
  button {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: ${prop=>prop.theme.text};
  }

  input[type="checkbox"] {
    /* -webkit-appearance: none; 
    -moz-appearance: none; 
    -ms-appearance: none;
    -o-appearance: none;  */ 
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    /* text-decoration: none;
    color: inherit; */
  }

  /* property */
  @property  --angle{
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }

/* scrollbar */
/* width */
::-webkit-scrollbar {
  width: 8px;
  max-width: 8px;
  max-height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${prop=>prop.theme.background};
  border-radius: 8px;

}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${prop=>prop.theme.primary};
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.5),
    inset 0 0 12px rgba(0,0,0,0.5);
  transition: 0.5s;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${prop=>prop.theme.primaryLight};
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0,0,0,0.5),
    inset 0 0 12px rgba(0,0,0,0.7);
}
`;

export default GlobalStyle;
