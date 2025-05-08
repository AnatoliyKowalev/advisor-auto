import React, { FC } from "react";
import { Star } from "lucide-react";
import { FeedbackStarsProps } from "./interfaces";

const FeedbackStars: FC<FeedbackStarsProps> = ({ stars }) => {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {Array.from({ length: stars }).map((_, i) => (
        <Star key={i} size={18} fill="currentColor" />
      ))}
    </div>
  );
};

export default FeedbackStars;
