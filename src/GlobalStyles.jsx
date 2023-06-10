import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Inter';
  src: url('./fonts/Inter/Inter-Regular.ttf') format('truetype');
  font-weight: 400;
  }

@font-face {
  font-family: 'Inter';
  src: url('./fonts/Inter/Inter-Medium.ttf') format('truetype');
  font-weight: 500;
  }

@font-face {
  font-family: 'Inter';
  src: url('./fonts/Inter/Inter-SemiBold.ttf') format('truetype');
  font-weight: 600;
  }

@font-face {
  font-family: 'Inter';
  src: url('./fonts/Inter/Inter-Bold.ttf') format('truetype');
  font-weight: 700;
  }

@font-face {
  font-family: 'OpenSans';
  src: url('./fonts/OpenSans/OpenSans-Light.ttf') format('truetype');
  font-weight: 300;
  }

@font-face {
  font-family: 'OpenSans';
  src: url('./fonts/OpenSans/OpenSans-Medium.ttf') format('truetype');
  font-weight: 400;
  }

@font-face {
  font-family: 'OpenSans';
  src: url('./fonts/OpenSans/OpenSans-Regular.ttf') format('truetype');
  font-weight: 500;
  }

@font-face {
  font-family: 'OpenSans';
  src: url('./fonts/OpenSans/OpenSans-SemiBold.ttf') format('truetype');
  font-weight: 600;
  }

@font-face {
  font-family: 'OpenSans';
  src: url('./fonts/OpenSans/OpenSans-Bold.ttf') format('truetype');
  font-weight: 700;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'OpenSans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #FAFAFA;
    color: rgb(1,67,97);
    -webkit-tap-highlight-color: transparent;
}
  ${modernNormalize}

  html {
    -webkit-box-sizing: border-box;
        box-sizing: border-box;
  }

  #root {
  scroll-behavior: smooth;
}

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  code {
    font-family: 'OpenSans', sans-serif;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  button, input {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

  h1, h2, h3, h4, h5, h6, p, button {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
