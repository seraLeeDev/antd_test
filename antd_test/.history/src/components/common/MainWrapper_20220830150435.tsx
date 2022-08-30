import React from "react";
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
`;
