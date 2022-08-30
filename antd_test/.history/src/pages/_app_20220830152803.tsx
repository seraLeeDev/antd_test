import "antd/dist/antd.css";


import type { AppProps } from "next/app";
import { GlobalStyle, theme } from "src/configs";
import { ThemeProvider } from "styled-components";
import {Layout}
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
