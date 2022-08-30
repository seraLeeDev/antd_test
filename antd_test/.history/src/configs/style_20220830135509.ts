import { createGlobalStyle, css } from "styled-components";
import type { DefaultTheme, SimpleInterpolation } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {}
}
