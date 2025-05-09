"use client";

import React, { FC } from "react";
import SectionTitle from "@/components/shared/section-title";
import Image from "next/image";
import LogosSlide from "./logos-slide";
import "./style.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AdvisorFamilyCard: FC = () => {
  return (
    <section className="bg-muted" id="advisor-family">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <Image
          src="/img/family-card.webp"
          className="md:col-span-5"
          width={800}
          height={800}
          alt="advisor family card"
        />
        <div className="md:col-span-6 flex flex-col items-start">
          <SectionTitle className="mx-auto md:ml-0">
            Advisor Family Card
          </SectionTitle>
          <p>
            Advisor Family - сім&apos;я, яка надає безліч можливостей та переваг
          </p>
          <br />
          <p>
            Advisor Family Card — екосистема, покликана допомогти Вам якісно
            обслужити своє авто в будь-якій точці України через наших
            акредитованих партнерів: АЗС, СТО, мийки, сервіси з послуг установки
            систем захисту, купівлі шин з приємними знижками.
          </p>
          <div className="logos w-full mt-[3rem] md:mt-[5rem] overflow-hidden whitespace-nowrap relative group">
            <LogosSlide />
            <LogosSlide />
          </div>
          <Button size='lg' asChild>
            <Link href="/brands" className="mx-auto mt-10">
              Дивитися всі
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvisorFamilyCard;
