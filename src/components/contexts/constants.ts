import { EnumBrand } from "@/types/brands";
import { EnumFuelType } from "@/types/cars";

export const LOAD_CARS_LIMIT = 3;

export const DEFAULT_STATE = {
  cars: [],
  total: 0,
  hasMore: false,
  brand: EnumBrand.Hyundai,
  fuelTypes: [EnumFuelType.gas, EnumFuelType.electro, EnumFuelType.diesel],
};
