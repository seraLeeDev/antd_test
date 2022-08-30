import { FC } from "react";
import { MainWrapper } from "src/components/common/MainWrapper";
import styled from "styled-components";
import { Button } from "antd";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <MainWrapper w="1920px" p="40px">
        <Button type="primary">primary btn</Button>
        <Button type="dashed">dashed btn</Button>
      </MainWrapper>
    </>
  );
};
