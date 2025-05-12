import { Skeleton } from "@/components/ui/skeleton";
import { Fuel } from "lucide-react";
import React, { FC } from "react";

const CarCardSkeleton: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:col-span-6 gap-4">
      <Skeleton className="w-full lg:max-w-[300px] lg:max-h-[300px] min-h-[200px] md:min-h-[300px]" />
      <div className="flex flex-col flex-1 pb-2">
        <Skeleton className="h-[1.5rem] w-full" />
        <Skeleton className="my-2 h-[1rem] w-[80%]" />
        <div className="flex flex-col gap-2 mt-auto text-md">
          <div className="flex items-center gap-3">
            <Fuel size={20} />
            <Skeleton className="h-[1rem] w-[30%]" />
          </div>
          <div className="flex flex-col">
            {[1, 2, 3].slice(0, 3).map((point) => (
              <div
                className="flex items-center gap-3"
                key={`point-preview-${point}`}
              >
                <span>✅</span> <Skeleton className="h-[1rem] w-[50%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCardSkeleton;
