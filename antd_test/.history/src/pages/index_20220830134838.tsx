import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>antd test</title>
      </Head>
    </>
  );
};

const Sample = styled.p`
  font-size: 40px;
  color: red;
`;
export default Home;
