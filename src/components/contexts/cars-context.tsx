import { getCars } from "@/lib/contentfulConfig";
import { EnumBrand } from "@/types/brands";
import { EnumFuelType, TypeContentfulCar } from "@/types/cars";
import React, {
  createContext,
  useContext,
  useState,
  FC,
  PropsWithChildren,
  useEffect,
} from "react";
import { DEFAULT_STATE, LOAD_CARS_LIMIT } from "./constants";

type CarFilterContextType = {
  loading: boolean;
  setBrand: (value: EnumBrand) => void;
  brand: EnumBrand;
  fuelTypes: EnumFuelType[];
  setFuelTypes: (value: EnumFuelType[]) => void;
  data: State;
  loadMore: () => void;
};

type State = {
  cars: TypeContentfulCar[];
  total: number;
  hasMore: boolean;
  brand: EnumBrand;
  fuelTypes: EnumFuelType[];
};

const CarFilterContext = createContext<CarFilterContextType | undefined>(
  undefined
);

export const CarFilterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [brand, setBrand] = useState<EnumBrand>(DEFAULT_STATE.brand);
  const [fuelTypes, setFuelTypes] = useState<EnumFuelType[]>(
    DEFAULT_STATE.fuelTypes
  );
  const [data, setData] = useState<State>(DEFAULT_STATE);
  const [loading, setLoading] = useState(false);

  const page = Math.floor(data.cars.length / LOAD_CARS_LIMIT) + 1;

  const loadMore = async () => {
    setLoading(true);

    const isReset = data.brand !== brand || data.fuelTypes !== fuelTypes;

    await getCars(brand, fuelTypes, isReset ? 1 : page, LOAD_CARS_LIMIT).then(
      (res) => {
        console.log(res);
        setLoading(false);

        setData((prev) => ({
          ...res,
          brand,
          fuelTypes,
          cars: isReset ? res.cars : [...prev.cars, ...res.cars],
        }));
        // setData(prev => ({
        //     ...res,
        //     cars: [...prev.cars, ...res.cars]
        // }));
      }
    );
  };

  useEffect(() => {
    loadMore();
  }, [brand, fuelTypes]);

  return (
    <CarFilterContext.Provider
      value={{
        loading,
        loadMore,
        data,
        brand,
        setBrand,
        fuelTypes,
        setFuelTypes,
      }}
    >
      {children}
    </CarFilterContext.Provider>
  );
};

export const useCarFilter = () => {
  const context = useContext(CarFilterContext);
  if (!context) {
    throw new Error("useCarFilter must be used within CarFilterProvider");
  }
  return context;
};
