import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "antd";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>antd test</title>
      </Head>
      <Button type="default">버튼입니닷</Button>
    </>
  );
};

export default Home;
