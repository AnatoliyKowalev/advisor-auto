import MainBanner from "@/components/home-page/main-banner";
import CarsSouthKorea from "@/components/home-page/cars-south-korea";
import React, { FC } from "react";
import GetFilesBlock from "@/components/home-page/get-files-block";
import ParalaxHyunday from "@/components/home-page/paralax-hyunday";
import VideosPreview from "@/components/home-page/videos-preview";

const Page: FC = () => {
  return (
    <>
      <MainBanner />
      <CarsSouthKorea />
      <ParalaxHyunday />
      <GetFilesBlock />
      <VideosPreview />
      {/* <div
        style={{
          height: "100vh",
        }}
      ></div> */}
    </>
  );
};

export default Page;
