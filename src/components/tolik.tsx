"use client";

import { TypeContentfulCar } from "@/types/cars";
import React, { FC } from "react";

const Tolik: FC<{ car: TypeContentfulCar }> = ({ car }) => {
  console.log(car);
  return car && <div>tolik {car?.fields?.fuelType}</div>;
};

export default Tolik;
