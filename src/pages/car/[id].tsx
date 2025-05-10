import { getCarById } from "@/lib/contentfulConfig";
import { TypeContentfulCar } from "@/types/cars";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

const CarPage: FC<{ car: TypeContentfulCar }> = ({ car }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(car);
  return (
    <div>
      <h1>Car ID: {id}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  // Replace this with your actual API endpoint
  const res = await getCarById(id);
  // const car = await res.json();
  const car = res;

  if (!car) {
    return {
      notFound: true, // If the car is not found, show 404
    };
  }

  return {
    props: {
      car, // Pass car data as a prop
    },
  };
};

export default CarPage;
