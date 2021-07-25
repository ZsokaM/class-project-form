import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 
html {
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0,.09)
    box-sizing: border-box;
    --strawberry: #f1356d;
    --lightest: #BFD7ED;
    --dark: #003B73;
    --medium: #0074B7;
    --light: #60A3D9;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  } 


  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 1rem;
    font-size: 1.5rem;
    line-height: 1;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  main {
    flex: 0 1 auto;
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.linkColor};
  }

  a:hover{
    text-decoration: underline;
    color: ${({ theme }) => theme.onHover};
  }

  button {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const lightTheme = {
  background: "#BFD7ED",
  color: "#003B73",
  linkColor: "#0074B7",
  onHover: "#60A3D9",
};

const darkTheme = {
  background: "#003B73",
  color: "#BFD7ED",
  linkColor: "#0074B7",
  onHover: "#60A3D9",
};

export { GlobalStyles, lightTheme, darkTheme };
