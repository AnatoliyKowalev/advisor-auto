"use client";

import { getCars } from "@/lib/contentfulConfig";
import { TypeContentfulCar } from "@/types/cars";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

const Cars: FC = () => {
  const [cars, setCars] = useState<TypeContentfulCar[]>([]);

  const loadStartCars = async () => {
    await getCars().then((res) => {
      setCars(res);
    });
  };

  console.log(cars);

  useEffect(() => {
    loadStartCars();
  }, []);

  return (
    <div className="container mx-auto">
      {cars.map(({ fields }, idx) => {
        const firstImage = fields.album[0].fields;

        return (
          <div key={fields.name + idx}>
            <div>{fields.name}</div>
            <img
              src={firstImage.file.url}
              className="w-[200px]"
              // width={1000}
              // height={1000}
              alt={firstImage.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cars;
