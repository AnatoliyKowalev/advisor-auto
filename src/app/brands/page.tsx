import Brands from "@/components/brands-page/brands";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import React, { FC } from "react";

const BrandsPage: FC = () => {
  return (
    <div className="py-[18vh] container mx-auto">
      <Breadcrumbs
        links={[
          { name: "Головна", href: "/" },
          { name: "Advisor Family Card", href: "/brands" },
        ]}
      />
      <Brands />
    </div>
  );
};

export default BrandsPage;
