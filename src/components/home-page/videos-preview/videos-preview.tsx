import SectionTitle from "@/components/shared/section-title";
import Image from "next/image";
import React, { FC } from "react";
import { videos } from "./constants";
import VideoCard from "./video-card";

const VideosPreview: FC = () => {
  return (
    <section className="container mx-auto">
      <SectionTitle>Авто з Кореї</SectionTitle>
      <a
        className="py-2 px-6 w-fit flex items-center gap-4 mx-auto text-lg shadow-lg"
        href="https://youtube.com/@ADVISORAUTO"
        target="_blank"
        rel="nofollow"
      >
        <Image
          src="/svg/youtube.svg"
          width={40}
          height={30}
          alt="youtube logo"
        />
        Більше відео на нашому каналі
      </a>
      <div className="mt-[120px] grid grid-cols-1 gap-x-8 md:grid-cols-12">
        {videos.map((video) => (
          <VideoCard {...video} key={video.title} />
        ))}
      </div>
    </section>
  );
};

export default VideosPreview;
