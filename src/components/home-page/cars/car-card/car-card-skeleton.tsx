import { Skeleton } from "@/components/ui/skeleton";
import { Fuel } from "lucide-react";
import React, { FC } from "react";

const CarCardSkeleton: FC = () => {
  return (
    <div className="flex gap-4">
      <Skeleton className="w-[300px] min-h-[200px] rounded-l" />
      <div className="flex flex-col flex-1">
        <Skeleton className="h-[1.5rem] w-full" />
        <Skeleton className="mt-2 h-[1rem] w-[80%]" />
        <div className="flex flex-col gap-2 mt-auto text-md">
          <div className="flex items-center gap-3">
            <Fuel size={20} />
            <Skeleton className="h-[1rem] w-[30%]" />
          </div>
          <div className="flex flex-col">
            {["", ""].slice(0, 3).map((point, idx) => (
              <div
                className="flex items-center gap-3"
                key={`point-preview-${idx}`}
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
