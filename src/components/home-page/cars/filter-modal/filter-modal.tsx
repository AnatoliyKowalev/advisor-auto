import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import Filter from "../filter";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const FilterModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="sticky h-fit z-1 bottom-[100px] flex justify-center">
          <Button
            className="w-fit bg-red-700 !px-8 gap-4 rounded-[2rem]"
            size="lg"
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
        <Filter />
        <DialogClose asChild>
          <Button className="mt-6" variant="outline" size="lg">
            Показати
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
