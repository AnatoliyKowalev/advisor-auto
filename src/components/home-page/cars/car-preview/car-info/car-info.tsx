import React, { FC } from "react";
import { TypeContentfulCar } from "@/types/cars";
import { Fuel } from "lucide-react";

const CarInfo: FC<TypeContentfulCar> = ({ fields, sys }) => {
  const { name, fuelType, points, description } = fields;

  return (
    <div className="px-4 md:px-0 my-6 flex flex-col gap-2">
      <div className="text-2xl font-bold">{name}</div>
      <div className="text-lg">{description}</div>
      <div className="flex items-center gap-2 mt-6 mb-2">
        <Fuel size={20} />
        {fuelType}
      </div>
      <div className="flex flex-col md:flex-row gap-4 flex-wrap">
        {points?.map((point, idx) => (
          <div
            className="flex items-center gap-2"
            key={`point-${sys.id}-${idx}`}
          >
            <span>✅</span> {point}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarInfo;
