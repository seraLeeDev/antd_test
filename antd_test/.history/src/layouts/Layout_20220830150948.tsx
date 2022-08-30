import { FC } from "react";
import { MainWrapper } from "src/components/common/MainWrapper";
import { Button } from "antd";

export const Layout: FC = () => {
  return (
    <MainWrapper w="1920px" p="40px">
      <Button type="default">버튼입니닷</Button>
    </MainWrapper>
  );
};
