import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import { GlobalStyle, theme } from "src/configs";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}></ThemeProvider>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
