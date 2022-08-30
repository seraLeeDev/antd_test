import { FC } from "react";
import { MainWrapper } from "src/components/common/MainWrapper";
import styled from "styled-components";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Space, Menu } from "antd";
import { Footer, Header, Content } from "antd/lib/layout/layout";
import { Layout } from "antd";
import Sider from "antd/lib/layout/Sider";

export const CustomLayout = () => {
  return (
    <>
      <Layout>
        <Header style={{ background: "aliceblue" }}>
          <MenuFoldOutlined />
        </Header>
        <Layout>
          <Sider trigger={null} collapsible>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                { key: "1", icon: <UserOutlined />, label: "nav1" },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "nav 2",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
              ]}
            />
          </Sider>
          <Layout>
            <Content style={{ background: "#fff" }}>
              <p>asdasdfasdfasdf</p>
              <Space>
                <Button type="primary">primary btn</Button>
                <Button type="dashed">dashed btn</Button>
                <Button type="ghost">ghost btn</Button>
                <DatePicker />
              </Space>
            </Content>
            <Footer>푸터</Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};