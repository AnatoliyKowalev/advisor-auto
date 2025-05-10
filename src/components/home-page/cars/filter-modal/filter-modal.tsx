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
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";

const FilterModal: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="sticky mt-4 h-fit z-1 bottom-[5vh] flex justify-center">
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
          <Link
            href="/#cars"
            className="mt-6 inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            Показати
          </Link>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
