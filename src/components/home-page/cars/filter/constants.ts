import { EnumBrand } from "@/types/brands";
import { EnumFuelType } from "@/types/cars";

export const DEFAULT_BRANDS = Object.values(EnumBrand);
export const DEFAULT_FUEL_TYPES = Object.values(EnumFuelType);

export const BRAND_ICONS = {
  [EnumBrand.KIA]: "/svg/kia-brand.svg",
  [EnumBrand.Hyundai]: "/svg/hyundai-brand.svg",
  [EnumBrand.Tesla]: "/svg/tesla-brand.svg",
  [EnumBrand.Volkswagen]: "/svg/volkswagen-brand.svg",
};
