import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

import { Button, DatePicker, Space, Menu, Breadcrumb, Layout } from "antd";
import { useAppSelector, useAppDispatch } from "src/hooks/useStore";
import { increment, decrement, incrementByAmount, selectCount } from "src/store/slices/counter";
import { RootState } from "src/store";

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({ key, label: `메뉴${key}` }));

const items2: MenuProps["items"] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `서브메뉴 ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return { key: subKey, label: `options ${subKey}` };
    }),
  };
});

const Home: NextPage = () => {
  const [collapse, setCollapse] = useState(false);
  const dispatch = useAppDispatch();
  const result = useAppSelector(selectCount);
  return (
    <>
      <Head>
        <title>antd test</title>
      </Head>
      <Layout style={{ height: "100vh" }}>
        <Sider width={200} trigger={null} collapsible collapsed={collapse}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
            items={items2}
          />
        </Sider>
        <Layout>
          <Header style={{ background: " white" }}>
            <MenuUnfoldOutlined />
          </Header>
          <Layout style={{ padding: "20px" }}>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: "#fff", padding: "20px" }}>
              <Menu mode="horizontal" defaultSelectedKeys={["1"]} items={items1} />
              <Space style={{ margin: "30px 0" }}>
                <h1>{result}</h1>
                <Button type="primary" onClick={() => console.log(result)}>
                  increase
                </Button>
                <Button type="dashed">dashed btn</Button>
                <Button type="ghost">ghost btn</Button>
                <DatePicker />
              </Space>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
