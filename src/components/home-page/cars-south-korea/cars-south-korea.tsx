"use client";

import SectionTitle from "@/components/shared/section-title";
import SubTitle from "@/components/shared/sub-title";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Accordion } from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import React, { FC } from "react";
import { cons, pros } from "./constants";
import YoutubeVideo from "@/components/shared/youtube-video";

const CarsSouthKorea: FC = () => {
  return (
    <section className="container mx-auto" id="cars-south-korea">
      <SectionTitle>Імпорт авто з Південної Кореї</SectionTitle>
      <SubTitle>Ми надаємо гарантію до 2 років або 40 тис км.</SubTitle>
      <div className="flex flex-col-reverse md:flex-row items-start gap-20">
        <Accordion
          type="multiple"
          className="w-full flex flex-col gap-8"
          defaultValue={["pros"]}
        >
          <AccordionItem value="pros">
            <AccordionTrigger className="bg-primary text-white [&>svg]:text-white">
              Плюси імпорту автомобілів з Південної Кореї
            </AccordionTrigger>
            <AccordionContent>
              <ul className="py-4 flex flex-col gap-2">
                {pros.map((option, idx) => (
                  <li
                    className="flex items-center gap-4 text-2xl"
                    key={`pros-${idx}`}
                  >
                    <Plus className="text-primary min-w-[24px]" />
                    {option}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cons">
            <AccordionTrigger className="bg-muted-foreground text-white [&>svg]:text-white">
              Мінуси напрямку
            </AccordionTrigger>
            <AccordionContent>
              <ul className="py-4 flex flex-col gap-2">
                {cons.map((option, idx) => (
                  <li
                    className="flex items-center gap-4 text-xl"
                    key={`cons-${idx}`}
                  >
                    <Minus className="text-muted-foreground min-w-[24px]" />
                    {option}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <YoutubeVideo
          preview="/img/maxresdefault.webp"
          video="https://www.youtube.com/watch?v=IpQqnmb4Uq4"
          className="relative md:top-[9rem] md:sticky"
        />
      </div>
    </section>
  );
};

export default CarsSouthKorea;
