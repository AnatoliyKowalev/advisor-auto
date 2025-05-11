import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import React, { FC } from "react";

const CarPreviewSkeleton: FC = () => {
  return (
    <div className="w-full h-fit md:h-full md:container md:mx-auto flex flex-col md:grid md:grid-cols-12 gap-10 md:pr-5">
      <div className="w-full md:col-span-9 md:px-8 md:overflow-x-hidden md:overflow-y-scroll h-full">
        <Skeleton className="w-full aspect-[16/9]" />
        <div className="flex gap-2 mt-2 overflow-x-scroll w-full">
          {[1, 2, 3, 4].map((option) => (
            <Skeleton
              className="flex cursor-pointer min-w-[150px] w-[150px] h-[90px]"
              key={option}
            />
          ))}
        </div>
        <div className="px-4 md:px-0 my-6 flex flex-col gap-2">
          <Skeleton className="h-[1rem] w-[30%]" />
          <Skeleton className="h-[1rem] w-[40%]" />
          <Skeleton className="h-[1rem] w-[35%] flex items-center gap-2 mt-6 mb-2" />
          <div className="flex gap-4 flex-wrap">
            {[1, 2]?.map((option) => (
              <div className="flex items-center gap-2" key={option}>
                <span>✅</span>
                <Skeleton className="h-[1rem] w-[100px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Separator className="md:hidden" />
      <Skeleton className="w-full md:col-span-3 h-[5rem]" />
    </div>
  );
};

export default CarPreviewSkeleton;
