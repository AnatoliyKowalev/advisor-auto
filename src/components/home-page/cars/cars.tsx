"use client";

import Image from "next/image";
import React, { FC, lazy } from "react";
import {
  CarFilterProvider,
  useCarFilter,
} from "@/components/contexts/cars-context";
import { Button } from "@/components/ui/button";
import CarCard from "./car-card";
import CarCardSkeleton from "./car-card/car-card-skeleton";
import { useScreen } from "@/hooks/use-media-query";

const FilterModal = lazy(() => import("./filter-modal"));
const Filter = lazy(() => import("./filter"));

const Cars: FC = () => {
  const { data, loading, loadMore } = useCarFilter();

  const isDesktop = useScreen();

  return (
    <div className="grid md:grid-cols-12 pb-10 gap-8">
      <div className="md:col-span-2">
        {isDesktop ? <Filter className="sticky top-[150px]" /> : null}
      </div>
      <div className="flex flex-col md:col-span-10">
        <div className="flex items-center text-md text-muted-foreground mb-2">{`Кейси імпорту (${data.cars.length}\\${data.total})`}</div>
        <div className="grid 2xl:grid-cols-12 gap-x-4 gap-y-8 mb-4">
          {!data.total && loading ? (
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
            className="mt-6 mx-auto"
            size="lg"
          >
            Завантажити ще
          </Button>
        ) : null}
      </div>
      {isDesktop ? null : <FilterModal />}
    </div>
  );
};

const CarsWrapper: FC = () => (
  <CarFilterProvider>
    <Cars />
  </CarFilterProvider>
);

export default CarsWrapper;
