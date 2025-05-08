import React, { FC, PropsWithChildren } from "react";
import { SectionTitleProps } from "./interfaces";
import { cn } from "@/lib/utils";

const SectionTitle: FC<PropsWithChildren<SectionTitleProps>> = ({
  className,
  children,
}) => {
  return (
    <h2
      className={cn(
        "text-3xl md:text-5xl text-center font-bold mb-8",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
