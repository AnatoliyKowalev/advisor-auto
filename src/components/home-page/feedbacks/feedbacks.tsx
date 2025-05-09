"use client";

import React, { FC, useState } from "react";
import { feedbacks } from "./constants";
import ReviewCard from "./review-card";
import SectionTitle from "@/components/shared/section-title";
import SubTitle from "@/components/shared/sub-title";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { isNull } from "lodash";
import FeekbackModal from "./feedback-modal";

const Feedbacks: FC = () => {
  const [activeIndex, setAactiveIndex] = useState<number | null>(null);

  const activeFeedback = isNull(activeIndex) ? null : feedbacks[activeIndex];

  return (
    <>
      <section className="container mx-auto" id="reviews-cases">
        <SectionTitle>Відгуки клієнтів та кейси імпорту</SectionTitle>
        <SubTitle>300+ реальних відгуків</SubTitle>
        <div className="grid gap-4 overflow-x-auto sm:grid-cols-4 grid-flow-col auto-cols-[minmax(90%,_1fr)] md:auto-cols-auto md:grid-flow-row md:overflow-x-visible md:grid-cols-12 snap-x snap-mandatory scroll-smooth p-6">
          {feedbacks.map((review, idx) => (
            <ReviewCard
              onClick={setAactiveIndex}
              idx={idx}
              {...review}
              key={review.user}
            />
          ))}
        </div>
        <Button className="mt-10" size="lg" asChild>
          <Link
            href={`https://www.google.com/maps/place/ADVISOR+AUTO/@50.3957107,30.5014269,0a,80y,90t/data=!3m7!1e2!3m5!1sAF1QipM1KaESa840f05vvJ0T_td5mNrlmxjs_AXmI06H!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM1KaESa840f05vvJ0T_td5mNrlmxjs_AXmI06H%3Dw150-h150-k-no-p!7i1280!8i721!4m8!3m7!1s0x40d4ce8176055555:0x4f52fd13766d5ce6!8m2!3d50.3957107!4d30.5014269!9m1!1b1!16s%2Fg%2F11gfp7jrmv?entry=ttu`}
            className="mx-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Дивитись усі відгуки
          </Link>
        </Button>
      </section>
      {activeFeedback ? (
        <FeekbackModal
          {...activeFeedback}
          open
          onOpenChange={() => setAactiveIndex(null)}
        />
      ) : null}
    </>
  );
};

export default Feedbacks;
