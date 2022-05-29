import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './main';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
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
        font-family: ${(props) => props.theme.fonts.poppins};
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

::placeholder {
    font-family: ${(props) => props.theme.fonts.poppins};
}
`;
export default GlobalStyle;
