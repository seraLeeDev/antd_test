import { FC } from "react";
import { MainWrapper } from "src/components/common/MainWrapper";
import styled from "styled-components";
import { Button, DatePicker, Space } from "antd";
import { Header } from "antd/lib/layout/layout";

export const CustomLayout = () => {
  return (
    <>
      <Header>헤더</Header>
      <MainWrapper w="1920px" p="40px">
        <Space>
          <Button type="primary">primary btn</Button>
          <Button type="dashed">dashed btn</Button>
          <Button type="ghost">ghost btn</Button>
          <DatePicker />
        </Space>
      </MainWrapper>
    </>
  );
};