import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
          <Layout style={{ padding: "20px" }}>
            <Content style={{ background: "#fff", padding: "20px" }}>
              <Space>
                <Button type="primary">primary btn</Button>
                <Button type="dashed">dashed btn</Button>
                <Button type="ghost">ghost btn</Button>
                <DatePicker />
              </Space>
            </Content>
            <Footer style={{ background: "orange" }}>푸터</Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
