import { Dispatch, SetStateAction } from "react";

export interface ReviewCardProps {
  idx: number;
  link: string;
  comment: string;
  stars: number;
  user: string;
  image: string;
  onClick: Dispatch<SetStateAction<number | null>>;
}
