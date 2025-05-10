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

import { EnumBrand } from "@/types/brands";
import { EnumFuelType } from "@/types/cars";
import React, { FC, useEffect, useMemo, useState } from "react";
import { BRAND_ICONS, DEFAULT_BRANDS, DEFAULT_FUEL_TYPES } from "./constants";
import { debounce } from "lodash";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const Filter: FC = () => {
  const { brand, fuelTypes, setBrand, setFuelTypes } = useCarFilter();

  const changeFuelType = debounce((value) => {
    setFuelTypes(value as EnumFuelType[]);
  }, 1500);

  const changeBrand = debounce((value) => {
    setBrand(value as EnumBrand);
  }, 1000);

  return (
    <div className="flex flex-col md:max-w-[250px]">
      <Label>Марка авто</Label>
      <Select onValueChange={changeBrand} defaultValue={brand}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
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
    </div>
  );
};

export default Filter;
