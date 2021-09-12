import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import theme from 'visual/theme';
import 'utils/locales';

type AppProps = {
  Component: React.ComponentType;
};

const App = ({ Component }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component />
      </ThemeProvider>
    </>
  );
};

export default App;
