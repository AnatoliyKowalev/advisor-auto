import { TypeContentfulCar } from "@/types/cars";
import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export async function getCars(brand?: string) {
  const entries = await client.getEntries({
    content_type: "car",
    ...(brand && { "fields.brand": brand }),
  });

  return entries.items as unknown as TypeContentfulCar[];
}
