import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import React, { FC } from "react";
import { ReviewCardProps } from "./interfaces";
import { Star } from "lucide-react";
import Link from "next/link";

const ReviewCard: FC<ReviewCardProps> = ({
  image,
  user,
  stars,
  comment,
  link,
}) => {
  return (
    <Card className="w-full max-w-md rounded-2xl shadow-lg transition hover:shadow-xl p-0 md:col-span-6  lg:col-span-4 xl:col-span-3 gap-2">
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
        <p className="text-muted-foreground text-sm line-clamp-5">{comment}</p>
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: stars }).map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center text-sm">
        <span className="font-medium">{user}</span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Переглянути
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
