import { createGlobalStyle } from "styled-components";
import type { DefaultTheme, SimpleInterpolation } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
  }
}

export const GlobalStyle = createGlobalStyle`

*, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

`;

const colors = {
  white: "#fff",
  black: "#333",
};

export const theme: DefaultTheme = { colors };
