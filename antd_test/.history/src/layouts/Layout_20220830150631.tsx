import { FC } from "react";
import { MainWrapper } from "src/components/common/MainWrapper";

interface ILayout {
  bgColor?: string;
  p?: string;
}

export const Layout: FC<ILayout> = ({ bgColor, p }) => {
  return <MainWrapper></MainWrapper>;
};
