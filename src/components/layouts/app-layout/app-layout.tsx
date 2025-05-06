import React, { FC, PropsWithChildren } from "react";
import AppHeader from "./app-header";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <AppHeader />
      {children}
    </div>

    //   <AppSidebar />
    //   <SidebarInset>
    //     <AppHeader />
    //     <div className="flex flex-1 flex-col">
    //       <div className="flex flex-col gap-4 py-4 px-4 md:gap-6 md:py-6 md:px-6">
    //         {children}
    //       </div>
    //     </div>
    //   </SidebarInset>
    // </SidebarProvider>
  );
};

export default AppLayout;
