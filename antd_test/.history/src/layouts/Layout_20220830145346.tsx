import { FC } from "react";
import { styled } from "styled-components";
interface ILayout {
  bgColor?: string;
  m?: string;
}

export const Layout: FC<ILayout> = ({ children, bgColor, m }) => {
  return <div></div>;
};
