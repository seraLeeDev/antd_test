import React, { FC } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const CustomLayout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};
