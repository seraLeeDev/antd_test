import { FC } from "react";
import { MainWrapper } from "src/components/common/MainWrapper";
import styled from "styled-components";

export const Layout = ({ children }) => {
  return (
    <>
      <MainWrapper w="1920px" p="40px">
        <p>asdfasdf</p>
        <Sample />
      </MainWrapper>
    </>
  );
};

const Sample = styled.div`
  bakground: aliceblue;
  width: 500px;
  height: 500px;
`;
