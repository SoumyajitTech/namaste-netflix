import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1 {
    margin-block-start: 0;
    margin-block-end: 0;
    margin: 0;
    padding: 0;
    color: rgb(255, 255, 255);
    font-size: 2rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
    margin: 0;
    padding: 0;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
  }
`;
