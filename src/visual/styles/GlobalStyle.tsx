import { createGlobalStyle, css } from 'styled-components';
import { rem } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body,
    html {
      min-height: 100vh;
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    *,
    body {
      font-family: 'Roboto Condensed', sans-serif;
    }

    body {
      background: linear-gradient(
        180deg,
        rgba(80, 80, 80, 0.25) 0,
        rgba(23, 23, 23, 0) ${rem(460)}
      );
    }

    button {
      cursor: pointer;
      border: none;
    }

    img {
      max-width: 100%;
      display: block;
    }
  `}
`;
