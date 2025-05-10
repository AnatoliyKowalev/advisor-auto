export type TypeBrand = {
  link: string;
  src: string;
  name: string;
  description: string;
  badges?: string[];
  contacts?: string[];
};

export enum EnumBrand {
  "KIA" = "KIA",
  "Hyundai" = "Hyundai",
  "Tesla" = "Tesla",
  "Volkswagen" = "Volkswagen"
}