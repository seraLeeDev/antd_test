import { FC } from "react";
import { styled } from "styled-components";
interface ILayout {
  bgColor?: string;
  m?: string;
}

export const Layout: FC<ILayout> = ({ children, bgColor, m }) => {
  return <div></div>;
};

const MainWrapper = styled.div`
  width: 1920px;
  margin: 0 auto;
  padding: 20px;
`;
