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
};

export type TypeContentfulMedia = {
  fields: {
    title: string;
    file: {
      url: string;
    };
  };
};
