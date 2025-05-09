import React, { FC } from "react";
import { BreadcrumbsProps } from "./interfaces";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Breadcrumbs: FC<BreadcrumbsProps> = ({ links }) => {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        {links.map(({ href, name }, idx) => {
          const isLast = idx === links.length - 1;

          return (
            <React.Fragment key={name}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{name}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}

        {/* <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem> */}

        {/* 
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
