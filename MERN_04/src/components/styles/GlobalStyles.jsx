import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Resetear márgenes y paddings */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Tipografía base */
  body {
    font-family: ${(props) => props.theme.typography.fonts.primary};
    font-size: ${(props) => props.theme.typography.sizes.medium};
    background-color:  ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  /* Enlaces */
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export default GlobalStyles;