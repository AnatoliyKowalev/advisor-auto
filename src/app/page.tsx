import React, { FC } from "react";
import MainBanner from "@/components/home-page/main-banner";
import CarsSouthKorea from "@/components/home-page/cars-south-korea";
import GetFilesBlock from "@/components/home-page/get-files-block";
import ParalaxHyunday from "@/components/home-page/paralax-hyunday";
import VideosPreview from "@/components/home-page/videos-preview";
import TelegramBlock from "@/components/home-page/telegram-block";
import YoutubeSubscribe from "@/components/home-page/youtube-subscribe";
import Faq from "@/components/home-page/faq";
import Team from "@/components/home-page/team";
import AdvisorFamilyCard from "@/components/home-page/advisor-family-card";

// const AdvisorFamilyCard = dynamic(
//   () => import("@/components/home-page/advisor-family-card"),
//   {
//     ssr: false,
//   }
// );
// const Feedbacks = dynamic(() => import("@/components/home-page/feedbacks"), {
//   ssr: false,
// });
// const Cars = dynamic(() => import("@/components/home-page/cars"), {
//   ssr: false,
// });

const HomePage: FC = () => {
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
      <AdvisorFamilyCard />
      <Team />
    </>
  );
};

export default HomePage;
