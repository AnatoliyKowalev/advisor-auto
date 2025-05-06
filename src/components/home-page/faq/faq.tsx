import SectionTitle from "@/components/shared/section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { FC } from "react";
import { tabs } from "./consants";
import SubTitle from "@/components/shared/sub-title";

const Faq: FC = () => {
  return (
    <section className="container mx-auto" id="faq">
      <SectionTitle>Питання та відповіді</SectionTitle>
      <SubTitle>Знайдіть відповіді на ваші запитання</SubTitle>
      <Tabs defaultValue="korea" className="w-full">
        <TabsList className="mx-auto">
          <TabsTrigger value="korea">Імпорт авто з Південної Кореї</TabsTrigger>
          <TabsTrigger value="europe">Імпорт авто з Європи</TabsTrigger>
        </TabsList>
        {Object.entries(tabs).map((tab) => (
          <TabsContent value={tab[0]} key={tab[0]}>
            <Accordion type="multiple">
              {tab[1].map((option, idx) => (
                <AccordionItem value={`item-${idx}`} key={option.trigger}>
                  <AccordionTrigger>{option.trigger}</AccordionTrigger>
                  <AccordionContent className="text-xl px-6">
                    {option.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
        {/* <TabsContent value="korea">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                
              </AccordionTrigger>
              <AccordionContent className="text-xl px-6">
               
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
               
              </AccordionTrigger>
              <AccordionContent>
                
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                
              </AccordionTrigger>
              <AccordionContent>
                
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
    */}
      </Tabs>
    </section>
  );
};

export default Faq;
