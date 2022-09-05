import "antd/dist/antd.css";
import "styles/variables.less";
// require("/styles/variables.less");

import type { AppProps } from "next/app";
import { GlobalStyle, theme } from "src/configs";
import { ThemeProvider } from "styled-components";
import { CustomLayout } from "src/layouts";
import { useDispatch } from "react-redux";

import { wrapper } from "src/store";

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CustomLayout>
          <Component {...pageProps} />
        </CustomLayout>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
