import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Input, MenuProps } from "antd";

import { Button, DatePicker, Space, Menu, Breadcrumb, Layout } from "antd";
import { useAppDispatch, useAppSelector } from "src/hooks/useStore";
import {
  increment,
  decrement,
  increseByAmount,
  decreseByAmount,
  resetToNum,
  selectCount,
} from "src/store/slices/counter";
import type { RootState } from "src/store";

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

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = (num: number) => dispatch(resetToNum(num));
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
                <Button type="dashed" onClick={handleDecrement}>
                  decrease
                </Button>

                <Button type="primary" onClick={handleIncrement}>
                  increase
                </Button>
                <Button type="default" onClick={() => dispatch(increseByAmount(10))}>
                  increase 10
                </Button>
                <Button type="link" onClick={() => dispatch(decreseByAmount(10))}>
                  decrease 10
                </Button>

                <Button type="ghost">{result}</Button>
                <Button type="primary" onClick={() => handleReset(0)}>
                  reset
                </Button>
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
