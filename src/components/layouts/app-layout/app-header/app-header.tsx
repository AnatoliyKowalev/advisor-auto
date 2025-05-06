"use client";

import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import NavMain from "./nav-main";
import { cn } from "@/lib/utils";
import ContactSubHeader from "../contact-sub-header";
import { Button } from "@/components/ui/button";

const AppHeader: FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // const header = document.getElementById('header');
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full flex flex-col z-[99]">
      <ContactSubHeader />
      <header
        className={cn("bg-card transition-shadow duration-300", {
          "shadow-lg": isSticky,
        })}
        ref={headerRef}
      >
        <div className="container mx-auto flex justify-between py-4 w-full items-center">
          <Image
            src="svg/advisor-auto-logo.svg"
            width={155}
            height={50}
            alt="company logo"
          />
          <NavMain />
          <Button size="lg">Консультація</Button>
        </div>
      </header>
    </div>
  );
};

export default AppHeader;
