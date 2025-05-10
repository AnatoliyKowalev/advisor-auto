import { TypeContentfulCar } from "@/types/cars";
import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export async function getCars(
  brand?: string,
  fuelTypes?: string[],
  page: number = 1,
  limit: number = 3
) {
  const skip = (page - 1) * limit;

  const entries = await client.getEntries({
    content_type: "car",
    limit,
    skip,
    ...(brand && { "fields.brand": brand }),
    ...(fuelTypes?.length && { "fields.fuelType[in]": fuelTypes.join(",") }),
  });

  return {
    cars: entries.items as unknown as TypeContentfulCar[],
    total: entries.total,
    hasMore: skip + limit < entries.total,
  };
}
