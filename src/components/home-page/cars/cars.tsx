"use client";

import Image from "next/image";
import React, { FC } from "react";
import Filter from "./filter";
import {
  CarFilterProvider,
  useCarFilter,
} from "@/components/contexts/cars-context";
import { Button } from "@/components/ui/button";
import CarCard from "./car-card";
import CarCardSkeleton from "./car-card/car-card-skeleton";
import FilterModal from "./filter-modal";
import { useScreen } from "@/hooks/use-media-query";

const Cars: FC = () => {
  const { data, loading, loadMore } = useCarFilter();

  const isDesktop = useScreen();

  return (
    <div className="container mx-auto flex flex-col md:flex-row py-10 gap-0 xl:gap-4 relative">
      {isDesktop ? (
        <div className="sticky top-[150px] h-fit">
          <Filter />
        </div>
      ) : null}
      <div className="flex flex-col flex-1">
        <div className="flex items-center text-md text-muted-foreground mb-2">{`Кейси імпорту (${data.cars.length}\\${data.total})`}</div>
        <div className="grid xl:grid-cols-12 gap-8">
          {loading && !data.cars.length ? (
            <>
              <CarCardSkeleton />
              <CarCardSkeleton />
              <CarCardSkeleton />
            </>
          ) : (
            data.cars.map((car, idx) => {
              return <CarCard {...car} key={car.sys.id + idx} />;
            })
          )}
          {!loading && !data.cars.length ? (
            <div className="md:w-[60%] mx-auto filter grayscale flex flex-col items-center gap-10 py-6">
              <Image
                src="/svg/not-found.svg"
                width={800}
                height={700}
                alt="порожній список"
              />
              <div className="text-xl md:text-lg">Жодних варіантів</div>
            </div>
          ) : null}
        </div>
        {data.hasMore ? (
          <Button
            onClick={loadMore}
            disabled={loading}
            className="mt-6 mb-4 mx-auto"
            size="lg"
          >
            Завантажити ще
          </Button>
        ) : null}
      </div>
      {isDesktop ? null : <FilterModal />}
      {/* <div className="sticky h-fit z-1 bottom-[100px] flex justify-center">
        <Button
          className="w-fit bg-red-700 !px-8 gap-4 rounded-[2rem]"
          size="lg"
        >
          <SlidersHorizontal className="!w-[1.5rem] !h-[1.5rem]" /> Фільтр
        </Button>
      </div> */}
    </div>
  );
};

const CarsWrapper: FC = () => (
  <CarFilterProvider>
    <Cars />
  </CarFilterProvider>
);

export default CarsWrapper;
