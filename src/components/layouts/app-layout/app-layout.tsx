import React, { FC, PropsWithChildren } from "react";
import AppHeader from "./app-header";
import AppFooter from "./app-footer";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
};

export default AppLayout;
