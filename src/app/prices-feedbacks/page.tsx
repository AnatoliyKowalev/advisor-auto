import React, { FC } from "react";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import Cars from "@/components/home-page/cars";
import Feedbacks from "@/components/home-page/feedbacks";

const PricesFeedbacksPage: FC = () => {
  return (
    <>
      <Breadcrumbs
        links={[
          { name: "Головна", href: "/" },
          { name: "Ціни та відгуки", href: "/prices-feedbacks" },
        ]}
      />
      <div id="cars" className="-mt-24 pt-24" />
      <Cars />
      <Feedbacks />
    </>
  );
};

export default PricesFeedbacksPage;
