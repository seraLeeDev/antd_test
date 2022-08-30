import React from "react";
import { theme } from "src/configs";
import styled from "styled-components";

interface IMainWrapperType {
  bgcolor?: string;
  m?: string;
  p?: string;
  w?: string;
}

export const MainWrapper = styled.div<IMainWrapperType>`
  width: ${({ w }) => w || "100%"};
  padding: ${({ p }) => p || "10px"};
  margin: ${({ m }) => m || "0 auto"};
  backgroud-color: ${({ bgcolor }) => bgcolor || theme.colors.white};
`;
