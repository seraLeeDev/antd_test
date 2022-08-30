import { createGlobalStyle, css } from "styled-components";
import type { DefaultTheme, SimpleInterpolation } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {}
}

export const GlobalStyle = createGlobalStyle`

*, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .Toastify{
    font-size: 1.6rem;
  }

  .Toastify__toast-body{
    white-space: pre-line;
  }
`;
