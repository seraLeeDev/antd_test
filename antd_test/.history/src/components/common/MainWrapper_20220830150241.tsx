import React from "react";
import styled from "styled-components";

interface MainWrapperType {
  bgcolor?: string;
  m?: string;
  p?: string;
  w?:string;
}

export const MainWrapper = ({ bgcolor, m, p,w }: MainWrapperType) => {
    return()
};

const Wrapper = styled.div`
    width:${({w})=>w||"100%"}
`