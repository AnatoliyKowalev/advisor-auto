export type TypeContentfulCar = {
  fields: {
    brand: string;
    album: TypeContentfulMedia[];
    description: string;
    fuelType: string;
    name: string;
    points: string[];
    tiktokLink: string;
  };
  sys: {
    id: string;
  };
};

export type TypeContentfulMedia = {
  fields: {
    title: string;
    file: {
      url: string;
    };
  };
};

export enum EnumFuelType {
  "gas" = "Газ",
  "diesel" = "Дизель",
  "electro" = "Електро",
  "gasoline" = "Бензин",
}
