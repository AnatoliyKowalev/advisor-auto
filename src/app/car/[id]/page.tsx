import { FC } from "react";
import { CarPageProps } from "./interfaces";
import { getCarById } from "@/lib/contentfulConfig";
import { notFound } from "next/navigation";

const CarPage: FC<CarPageProps> = async ({ params }) => {
  const { id } = await params;
  const res = await getCarById(id);

  if (!res?.car) {
    return notFound();
  }

  return (
    <>
      <h1>{res.car.name}</h1>
    </>
  );
};
export default CarPage;
