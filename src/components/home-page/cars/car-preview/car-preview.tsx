import { TypeContentfulCar } from "@/types/cars";
import React, { FC } from "react";
import AlbumCarousel from "./album-carousel";
import SidebarInfo from "./sidebar-info";
import { Separator } from "@/components/ui/separator";
import CarInfo from "./car-info";

const CarPreview: FC<TypeContentfulCar> = (car) => {
  return (
    <div className="w-full h-fit md:h-full md:container md:mx-auto flex flex-col md:grid md:grid-cols-12 gap-10 md:pr-5">
      <div className="w-full md:col-span-9 md:px-8 md:overflow-x-hidden md:overflow-y-scroll h-full">
        <AlbumCarousel {...car} />
        <CarInfo {...car} />
      </div>
      <Separator className="md:hidden" />
      <SidebarInfo />
    </div>
  );
};

export default CarPreview;
