import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import { GlobalStyle, theme } from "src/configs";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
