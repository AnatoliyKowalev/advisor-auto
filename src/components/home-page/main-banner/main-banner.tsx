import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

const MainBanner: FC = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 h-screen pt-[25vh] overflow-hidden relative">
      <div className="flex flex-col md:col-span-6">
        <span className="text-2xl text-primary font-bold">
          AdvisorAuto - Авто з гарантією
        </span>
        <h1 className="mt-4 mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          Імпорт авто з Південної Кореї та Європи
        </h1>
        <div
          className="flex items-center justify-center md:justify-start gap-4 cursor-pointer group"
          role="button"
        >
          <PlayCircleIcon className="rounded-full w-12 h-12 text-primary transition-shadow duration-300 group-hover:shadow-[0_0_15px_#a6f4c5]" />
          <span className="font-[500]">Дізнатись більше</span>
        </div>
      </div>
      <div className="flex flex-col md:col-span-6">
        <Image
          src="/img/kia.png"
          className="absolute scale-220 md:scale-100 bottom-[10vh] md:bottom-[auto] right-[-36%] md:right-[0] md:left-1/2 transform md:-translate-x-1/3 md:translate-y-1/5 pointer-events-none"
          alt="white kia car"
          width={1200}
          height={1000}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default MainBanner;
