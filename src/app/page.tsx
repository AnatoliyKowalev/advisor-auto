import MainBanner from "@/components/home-page/main-banner";
import CarsSouthKorea from "@/components/home-page/cars-south-korea";
import React, { FC } from "react";
import GetFilesBlock from "@/components/home-page/get-files-block";
import ParalaxHyunday from "@/components/home-page/paralax-hyunday";
import VideosPreview from "@/components/home-page/videos-preview";
import TelegramBlock from "@/components/home-page/telegram-block";
import YoutubeSubscribe from "@/components/home-page/youtube-subscribe";
import Faq from "@/components/home-page/faq";
import Feedbacks from "@/components/home-page/feedbacks";
import AdvisorFamilyCard from "@/components/home-page/advisor-family-card";
import Team from "@/components/home-page/team";

const Page: FC = () => {
  return (
    <>
      <MainBanner />
      <CarsSouthKorea />
      <ParalaxHyunday />
      <GetFilesBlock />
      <TelegramBlock />
      <VideosPreview />
      <YoutubeSubscribe />
      <Faq />
      <Feedbacks />
      <AdvisorFamilyCard />
      <Team />
    </>
  );
};

export default Page;
