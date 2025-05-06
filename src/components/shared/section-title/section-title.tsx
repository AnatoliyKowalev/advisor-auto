import React, { FC, PropsWithChildren } from "react";

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="text-5xl text-center font-bold mb-8">{children}</h2>;
};

export default SectionTitle;
