import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { FC } from "react";
import Filter from "../filter";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useCarFilter } from "@/components/contexts/cars-context";

const FilterModal: FC = () => {
  const { loadMore } = useCarFilter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="sticky mt-4 h-fit z-1 bottom-[5vh] flex justify-center block md:hidden"
          role="button"
          aria-haspopup="dialog"
          aria-controls="radix-«Reketb»"
        >
          <Button
            className="w-fit bg-red-700 !px-8 gap-4 rounded-[2rem]"
            size="lg"
            aria-label="Фільтр"
            aria-haspopup="dialog"
            aria-controls="filter-dialog"
          >
            <SlidersHorizontal className="!w-[1.5rem] !h-[1.5rem]" />
            Фільтр
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="px-0 gap-4">
          <DialogTitle className="text-left text-xl mb-2 foont-bold">
            Фільтр:
          </DialogTitle>
        </DialogHeader>
        <Filter
          searchBtn={
            <DialogClose asChild>
              <Link
                href="#cars"
                onClick={loadMore}
                className="mt-6 inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors gap-3"
              >
                <Search /> Пошук
              </Link>
            </DialogClose>
          }
        />
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
