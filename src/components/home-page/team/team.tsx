import SectionTitle from "@/components/shared/section-title";
import React, { FC } from "react";
import { team } from "./constants";
import TeammateCard from "./teammate-card";

const Team: FC = () => {
  return (
    <section className="container mx-auto" id="about">
      <SectionTitle>Команда AdvisorAuto</SectionTitle>
      <div className="flex flex-wrap justify-center gap-4 mt-[100px]">
        {team.map((user) => (
          <TeammateCard {...user} key={user.name} />
        ))}
      </div>
    </section>
  );
};

export default Team;
