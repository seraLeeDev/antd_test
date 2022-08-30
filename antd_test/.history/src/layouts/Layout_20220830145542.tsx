import { FC } from "react";

interface ILayout {
  bgColor?: string;
  m?: string;
}

export const Layout: FC<ILayout> = ({ bgColor, m }) => {
  return <MainWrapper></MainWrapper>;
};

const MainWrapper = styled.div`
  width: 1920px;
  margin: 0 auto;
  padding: 20px;
`;
