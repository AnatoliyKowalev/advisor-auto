import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import React, { FC } from "react";
import { ReviewCardProps } from "./interfaces";
import Link from "next/link";
import FeedbackStars from "@/components/shared/feedback-stars";

const ReviewCard: FC<ReviewCardProps> = ({
  image,
  user,
  stars,
  comment,
  link,
  idx,
  onClick,
}) => {
  return (
    <Card
      className="snap-start w-full max-w-md rounded-2xl shadow-lg transition hover:shadow-xl p-0 gap-2 col-span-1 md:col-span-6 lg:col-span-4 xl:col-span-3 h-fit"
      onClick={() => onClick(idx)}
    >
      <CardHeader className="p-0 overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={`Фото відгуку від ${user}`}
          width={640}
          height={360}
          className="h-[280px] w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <p
          className="text-muted-foreground text-sm line-clamp-5"
          title={comment}
        >
          {comment}
        </p>
        <FeedbackStars stars={stars} />
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Перейти
        </Link>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 text-sm">
        <span className="font-medium">{user}</span>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
