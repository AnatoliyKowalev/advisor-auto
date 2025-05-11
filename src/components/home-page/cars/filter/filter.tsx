import React, { FC } from "react";
import { useCarFilter } from "@/components/contexts/cars-context";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BRAND_ICONS, DEFAULT_BRANDS, DEFAULT_FUEL_TYPES } from "./constants";
import { debounce } from "lodash";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { EnumBrand } from "@/types/brands";
import { EnumFuelType } from "@/types/cars";
import { FilterProps } from "./interfaces";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Search } from "lucide-react";

const Filter: FC<FilterProps> = ({ className, searchBtn }) => {
  const { brand, fuelTypes, isDirty, setBrand, setFuelTypes, loadMore } =
    useCarFilter();

  const changeFuelType = debounce((value) => {
    setFuelTypes(value as EnumFuelType[]);
  }, 300);

  const changeBrand = debounce((value) => {
    setBrand(value as EnumBrand);
  }, 300);

  return (
    <div className={cn("flex flex-col md:max-w-[250px]", className)}>
      <Label>Марка авто</Label>
      <Select
        onValueChange={changeBrand}
        defaultValue={brand}
        aria-label="Выбрать марку автомобиля"
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent position="item-aligned">
          <SelectGroup>
            <SelectLabel>Всі маркі</SelectLabel>
            {DEFAULT_BRANDS.map((brand) => (
              <SelectItem value={brand} key={brand}>
                <Image
                  src={BRAND_ICONS[brand]}
                  className="w-[30px] max-h-[20px] mr-1"
                  width={40}
                  height={40}
                  alt="логотип авто"
                />
                {brand}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Label className="mt-6">Тип пального</Label>
      <ToggleGroup
        variant="outline"
        onValueChange={changeFuelType}
        defaultValue={fuelTypes}
        className="flex flex-wrap"
        type="multiple"
      >
        {DEFAULT_FUEL_TYPES.map((type) => (
          <ToggleGroupItem value={type} aria-label={type} key={type}>
            {type}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      {isDirty
        ? (searchBtn ?? (
            <Link
              href="#cars"
              onClick={loadMore}
              className="mt-6 inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors gap-3"
            >
              <Search /> Пошук
            </Link>
          ))
        : null}
      {/* {isDirty ? (
        forDialog ? (
          <DialogClose asChild>
            <Link
              href="#cars"
              onClick={loadMore}
              className="mt-6 inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors gap-3"
            >
              <Search /> Пошук
            </Link>
          </DialogClose>
        ) : (
          <Link
            href="#cars"
            onClick={loadMore}
            className="mt-6 inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors gap-3"
          >
            <Search /> Пошук
          </Link>
        )
      ) : null} */}
    </div>
  );
};

export default Filter;
