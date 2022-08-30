import { FC } from "react";

interface ILayout {
  bgColor?: string;
  m?: string;
}

export const Layout: FC<ILayout> = ({ children, bgColor, m }) => {};
