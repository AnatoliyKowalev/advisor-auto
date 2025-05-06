import React, { FC } from "react";
import { VideoCardProps } from "./interfaces";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const VideoCard: FC<VideoCardProps> = ({ preview, video, title }) => (
  <a
    href={video}
    className="md:col-span-4 h-full"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Card className="px-3 py-3 overflow-hidden transition-shadow hover:shadow-xl group h-full">
      <Image
        src={preview}
        className="w-full h-48 object-cover rounded transition-transform duration-300 group-hover:scale-102"
        width={300}
        height={200}
        alt={title}
      />
      <CardContent>
        <h3 className="text-lg font-semibold group-hover:text-primary">
          {title}
        </h3>
      </CardContent>
    </Card>
  </a>
);

export default VideoCard;
