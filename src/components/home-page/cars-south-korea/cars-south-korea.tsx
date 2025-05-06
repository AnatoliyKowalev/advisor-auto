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
      <div className="flex items-start gap-20">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-8"
        >
          <AccordionItem value="pros">
            <AccordionTrigger className="flex items-center text-2xl bg-primary text-white hover:no-underline [&>svg]:text-white px-6 cursor-pointer">
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
            <AccordionTrigger className="flex items-center text-2xl bg-muted-foreground text-white hover:no-underline [&>svg]:text-white px-6 cursor-pointer">
              Мінуси напрямку
            </AccordionTrigger>
            <AccordionContent>
              <ul className="py-4 flex flex-col gap-2">
                {cons.map((option, idx) => (
                  <li
                    className="flex items-center gap-4 text-2xl"
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
          preview="https://img.youtube.com/vi/IpQqnmb4Uq4/maxresdefault.jpg"
          video="https://www.youtube.com/watch?v=IpQqnmb4Uq4"
        />
      </div>
    </section>
  );
};

export default CarsSouthKorea;
