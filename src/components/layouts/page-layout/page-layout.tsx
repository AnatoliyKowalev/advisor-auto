import React, { FC, PropsWithChildren } from "react";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="py-[18vh] container mx-auto">{children}</div>;
};

export default PageLayout;
