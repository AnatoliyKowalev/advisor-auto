import React, { FC } from "react";
import { Fuel } from "lucide-react";
import { TypeContentfulCar } from "@/types/cars";
import Link from "next/link";

const CarCard: FC<TypeContentfulCar> = ({ fields, sys }) => {
  const firstImage = fields.album[0].fields;

  return (
    <Link
      href={`/car/${sys.id}`}
      className="xl:col-span-6 flex flex-col lg:flex-row gap-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={firstImage.file.url}
        className="w-full lg:max-w-[300px] lg:max-h-[300px] object-contain rounded-t lg:rounded-t-none lg:rounded-l bg-muted"
        width={300}
        height={300}
        loading="lazy"
        alt={firstImage.title}
      />
      <div className="flex flex-col flex-1">
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
    </Link>
  );
};

export default CarCard;
