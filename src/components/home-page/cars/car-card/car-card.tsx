import React, { FC } from "react";
import { CarCardProps } from "./interfaces";
import { Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";

const CarCard: FC<CarCardProps> = ({ fields, sys }) => {
  const firstImage = fields.album[0].fields;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <img
        src={firstImage.file.url}
        className="w-full md:max-w-[300px] rounded-t md:rounded-l"
        alt={firstImage.title}
      />
      <div className="flex flex-col">
        <div className="font-bold text-lg">{fields.name}</div>
        <div className="mb-2">{fields.description}</div>
        <div className="flex flex-col gap-2 mt-auto text-md">
          <div className="flex items-center gap-3">
            <Fuel size={20} />
            {fields.fuelType}
          </div>
          <div className="flex flex-col">
            {fields.points?.slice(0, 3).map((point, idx) => (
              <div
                className="flex items-center gap-3"
                key={`point-${sys.id}-${idx}`}
              >
                <span>✅</span> {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
