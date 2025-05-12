"use client";

import React, { FC } from "react";
import { useScreen } from "@/hooks/use-media-query";
import Image from "next/image";
import WelcomeModal from "../welcome-modal";

const MainBanner: FC = () => {
  const isDesktop = useScreen();

  return (
    <div className="bg-[url('/svg/baner-overlay.svg')] bg-no-repeat bg-cover">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 h-screen pt-[5vh] overflow-hidden md:overflow-visible relative">
        <div className="py-[20vh] md:py-[18vh] flex text-center md:text-left flex-col md:col-span-6 gap-10">
          <span className="text-2xl text-primary font-bold">
            AdvisorAuto - Авто з гарантією
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold md:font-bold">
            Імпорт авто з Південної Кореї та Європи
          </h1>
          <WelcomeModal />
        </div>
        {isDesktop ? (
          <div className="hidden md:block flex flex-col md:col-span-6">
            <Image
              src="/img/kia.webp"
              className="md:absolute md:translate-x-1/5 md:translate-y-1/7 md:bottom-[10vh] object-contain md:left-1/2 transform pointer-events-none"
              alt="white kia car"
              sizes="(max-width: 1000px) 1200px"
              loading="eager"
              priority
              fill
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainBanner;
