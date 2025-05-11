import { getCarById } from "@/lib/contentfulConfig";
import { notFound } from "next/navigation";
import { CarPageProps } from "./interfaces";

const CarPage = async ({ params }: CarPageProps) => {
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
