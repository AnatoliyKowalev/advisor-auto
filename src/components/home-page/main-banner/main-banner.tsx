import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

const MainBanner: FC = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 h-screen pt-[5vh] overflow-hidden md:overflow-visible relative">
      <div className="justify-center md flex text-center md:text-left flex-col md:col-span-6 gap-10 md:gap-6">
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
      <div className="hidden md:block flex flex-col md:col-span-6">
        {/* absolute md:-translate-x-1/3 md:translate-y-1/5 */}
        <Image
          src="/img/kia.webp"
          className="md:absolute md:translate-x-1/4 md:translate-y-1/6 md:bottom-[10vh] object-contain md:left-1/2 transform pointer-events-none"
          alt="white kia car"
          // width={800}
          // height={600}
          fill
          sizes="(max-width: 500px) 200px, 500px, 1200px"
        // layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default MainBanner;
