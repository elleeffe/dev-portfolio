import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './main';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  @font-face {
    font-family: 'Gilroy';
    src: url('fonts/Gilroy-Light.woff2') format('woff2'),
      url('fonts/Gilroy-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Gilroy';
    src: url('fonts/Gilroy-Medium.woff2') format('woff2'),
      url('fonts/Gilroy-Medium.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Gilroy';
    src: url('fonts/Gilroy-Bold.woff2') format('woff2'),
      url('fonts/Gilroy-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Gilroy';
    src: url('fonts/Gilroy-ExtraBold.woff2') format('woff2'),
      url('fonts/Gilroy-ExtraBold.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
}

html {
  scroll-behavior: smooth;
  body {
    font-family: ${(props) => props.theme.fonts.girloy};
    background: ${(props) => props.theme.colors.dark};

    ul {
      list-style: none;
    }

    a.inline {
      text-decoration: none;
      color: ${(props) => props.theme.colors.success};
      cursor: pointer;
      transition: all 50ms ease;

      &:hover {
          text-decoration: underline;
      }
    }
  }
}

::placeholder, input, textarea {
  font-family: ${(props) => props.theme.fonts.girloy};
}
`;
export default GlobalStyle;
