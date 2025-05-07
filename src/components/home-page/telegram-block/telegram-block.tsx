"use client";

import CustomIcon from "@/components/shared/custom-icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";

const TelegramBlock: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 } // adjust as needed
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="flex md:h-[50vh] bg-muted">
      <div className="container mx-auto flex flex-col md:flex-row py-20">
        <div className="flex flex-col justify-center gap-8 flex-1 h-full pb-20 md:p-0">
          <p className="text-2xl font-[600] w-full">
            Підпишіться на наші Telegram канали, <br /> щоб бути в курсі
            актуальних цін та новин ринку
          </p>
          <div className="flex items-center gap-4 w-full">
            <Button size="lg">
              <CustomIcon icon="telegram" />
              Європа
            </Button>
            <Button size="lg">
              <CustomIcon icon="telegram" />
              Південна Корея 🇰🇷
            </Button>
          </div>
        </div>
        <div className="flex-1 h-full flex items-center justify-center relative">
          <Image
            src="/img/phone-frame.png"
            className="w-[197px] h-[415px] z-2 absolute center object-contain"
            width={210}
            height={400}
            alt="iphone frame"
          />
          <div className="w-[190px] h-[400px] rounded-[20px] bg-[#161716] relative flex items-center justify-center overflow-hidden">
            <video
              src="/video/telegram-scroll.mp4"
              className="w-full h-full absolute z-1"
              ref={videoRef}
              muted
              playsInline
              loop
              preload="metadata"
              controls={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelegramBlock;
