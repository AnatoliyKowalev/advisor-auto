import React, { FC, PropsWithChildren } from "react";

const SubTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="text-2xl text-secondary text-center font-bold mb-[150px] w-fit mx-auto relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bottom-[-10px] after:bg-primary">
      {children}
    </div>
  );
};

export default SubTitle;
