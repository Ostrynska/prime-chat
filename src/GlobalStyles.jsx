import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';
import Inter700 from '../fonts/Inter/Inter-Bold.ttf';
import Inter600 from '../fonts/Inter/Inter-SemiBold.ttf';
import Inter500 from '../fonts/Inter/Inter-Medium.ttf';
import Inter400 from '../fonts/Inter/Inter-Regular.ttf';

import OpenSans700 from '../fonts/OpenSans/OpenSans-Bold.ttf';
import OpenSans600 from '../fonts/OpenSans/OpenSans-SemiBold.ttf';
import OpenSans500 from '../fonts/OpenSans/OpenSans-Medium.ttf';
import OpenSans400 from '../fonts/OpenSans/OpenSans-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Inter';
    src: url(${Inter400}), url(${Inter500}), url(${Inter600}), url(${Inter700})
  }
@font-face {
  font-family: 'OpenSans';
    src: url(${OpenSans400}), url(${OpenSans500}), url(${OpenSans600}), url(${OpenSans700})
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


  h1, h2, h3, h4, h5, h6, p, button {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

:root.themeLight {
    --bgColor: #FFFFFF;
    --bgSecondaryColor: #FFF3E1;
    --contentColor: #4e4e4e;
    --primaryColor: #625FFB;
    --secondaryColor: #E2992B;
    --headerColor: #303030;
    --titleColor: #263238;
    --textColor: #4E4E4E;
    --whiteColor: #FFFFFF;
    --greyColor: #F3F3F3;
    --darkGreyColor: #454545;
