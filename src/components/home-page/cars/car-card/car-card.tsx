import React, { FC, lazy, Suspense } from "react";
import { Fuel, SquareX } from "lucide-react";
import { TypeContentfulCar } from "@/types/cars";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CarPreviewSkeleton from "../car-preview/car-preview-skeleton";

const CarPreview = lazy(
  () => import("@/components/home-page/cars/car-preview")
);

const CarCard: FC<TypeContentfulCar> = (car) => {
  const { name, description, fuelType, points, album } = car.fields;
  const firstImage = album[0].fields;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="xl:col-span-6 flex flex-col lg:flex-row gap-4"
          role="button"
          aria-label="Відкрити перегляд авто"
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
            <div className="font-bold text-lg">{name}</div>
            <div className="mb-2">{description}</div>
            <div className="flex flex-col gap-2 mt-auto text-md">
              <div className="flex items-center gap-3">
                <Fuel size={20} />
                {fuelType}
              </div>
              <div className="flex flex-col">
                {points?.slice(0, 3).map((point, idx) => (
                  <div
                    className="flex items-center gap-3"
                    key={`point-${car.sys.id}-${idx}`}
                  >
                    <span>✅</span> {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="rounded-[0px] border-none !max-w-[100vw] md:!max-w-[90vw] !max-h-[100vh] md:!max-h-[90vh] w-full h-full p-0 md:p-4 flex flex-col overflow-y-scroll md:overflow-y-visible gap-2">
        <DialogHeader className="hidden">
          <DialogTitle>Огляд</DialogTitle>
        </DialogHeader>
        <Suspense fallback={<CarPreviewSkeleton />}>
          <CarPreview {...car} />
        </Suspense>
        <DialogClose asChild>
          <Button
            className="md:hidden !p-0 flex text-white absolute top-2 right-2"
            variant="ghost"
          >
            <SquareX className="!w-[25px] !h-[25px]" />
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button
            className="md:hidden md:container md:mx-auto mt-auto mx-4 mb-20"
            variant="outline"
          >
            Закрити
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default CarCard;
