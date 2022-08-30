import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import {ThemeProvider}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
