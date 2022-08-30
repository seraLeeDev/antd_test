import { FC } from "react";
import { MainWrapper } from "src/components/common/MainWrapper";
import styled from "styled-components";
import { Button, DatePicker, Space } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Layout } from "antd";
import Sider from "antd/lib/layout/Sider";

export const CustomLayout = () => {
  return (
    <Layout>
      <Sider>side</Sider>
      <Header>head</Header>

      <Space>
        <Button type="primary">primary btn</Button>
        <Button type="dashed">dashed btn</Button>
        <Button type="ghost">ghost btn</Button>
        <DatePicker />
      </Space>
    </Layout>
  );
};
