"use client";

import React, { FC } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";

const MainBanner: FC = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="bg-[url('/svg/baner-overlay.svg')] bg-no-repeat bg-cover">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 h-screen pt-[5vh] overflow-hidden md:overflow-visible relative">
        <div className="py-[18vh] flex text-center md:text-left flex-col md:col-span-6 gap-10">
          <span className="text-2xl text-primary font-bold">
            AdvisorAuto - Авто з гарантією
          </span>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Імпорт авто з Південної Кореї та Європи
          </h1>
          <div
            className="flex mt-4 items-center justify-center md:justify-start gap-4 cursor-pointer group"
            role="button"
          >
            <PlayCircleIcon className="rounded-full w-12 h-12 text-primary transition-shadow duration-300 group-hover:shadow-[0_0_15px_#a6f4c5]" />
            <span className="font-[500]">Дізнатись більше</span>
          </div>
        </div>
        {isDesktop ? (
          <div className="hidden md:block flex flex-col md:col-span-6">
            <Image
              src="/img/kia.webp"
              className="md:absolute md:translate-x-1/5 md:translate-y-1/7 md:bottom-[10vh] object-contain md:left-1/2 transform pointer-events-none"
              alt="white kia car"
              fill
              sizes="(max-width: 1000px) 1200px"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainBanner;
