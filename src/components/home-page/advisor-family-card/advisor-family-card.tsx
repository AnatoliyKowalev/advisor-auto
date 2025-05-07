"use client";

import React, { FC } from "react";
import SectionTitle from "@/components/shared/section-title";
import Image from "next/image";
import LogosSlide from "./logos-slide";
import "./style.css";

const AdvisorFamilyCard: FC = () => {
  return (
    <section className="bg-muted">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <Image
          src="/img/family-card.webp"
          className="md:col-span-5"
          width={800}
          height={800}
          alt="advisor family card"
        />
        <div className="md:col-span-6 flex flex-col items-start">
          <SectionTitle>Advisor Family Card</SectionTitle>
          <p>Advisor Family - сім'я, яка надає безліч можливостей та переваг</p>
          <br />
          <p>
            Advisor Family Card — екосистема, покликана допомогти Вам якісно
            обслужити своє авто в будь-якій точці України через наших
            акредитованих партнерів: АЗС, СТО, мийки, сервіси з послуг установки
            систем захисту, купівлі шин з приємними знижками.
          </p>
          {/* <div className="logos">
            <div className="logos-slide">
              {brands.map((brand) => (
                <div className="gg" key={brand.name}>
                  <Image
                    src={brand.src}
                    className="h-[50px] mx-[40px]"
                    width={200}
                    height={150}
                    alt={brand.name}
                  />
                </div>
              ))}
            </div>
            <div className="logos-slide">
              {brands.map((brand) => (
                <div className="gg" key={brand.name}>
                  <Image
                    src={brand.src}
                    // className="h-[50px] mx-[40px]"
                    width={200}
                    height={150}
                    alt={brand.name}
                  />
                </div>
              ))}
            </div>
          </div> */}
          <div className="logos w-full mt-[100px] overflow-hidden whitespace-nowrap relative group">
            <LogosSlide />
            <LogosSlide aria-hidden />
            {/* <div className="logos-slide">
              <Image
                src={"/svg/wog.svg"}
                width={200}
                height={150}
                alt={"brand.name"}
              />
              <Image
                src={"/svg/wog.svg"}
                width={200}
                height={150}
                alt={"brand.name"}
              />{" "}
            </div>{" "}
            <div aria-hidden className="logos-slide">
              <Image
                src={"/svg/wog.svg"}
                width={200}
                height={150}
                alt={"brand.name"}
              />
              <Image
                src={"/svg/wog.svg"}
                width={200}
                height={150}
                alt={"brand.name"}
              />{" "}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorFamilyCard;
