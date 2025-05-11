import ContactModal from "@/components/home-page/contact-modal";
import CustomIcon from "@/components/shared/custom-icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React, { FC } from "react";

const SidebarInfo: FC = () => {
  return (
    <div className="w-full md:col-span-3 flex flex-col gap-4 p-4 md:p-0 text-center">
      <div className="text-xl font-bold">
        Бажаєте придбати авто з Південної Кореї?
      </div>
      <p>Лишайте свої контакти</p>
      <ContactModal>
        <Button className="!w-full">Залишити заявку</Button>
      </ContactModal>
      <Separator />
      <p>або пишіть нам в телеграм, дзвоніть</p>
      <Button className="!w-full" asChild>
        <Link
          href="https://t.me/advisorautoelectro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomIcon icon="telegram" />
          Європа
        </Link>
      </Button>
      <Button className="!w-full" asChild>
        <Link
          href="https://t.me/advisorautokorea"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomIcon icon="telegram" />
          Південна Корея 🇰🇷
        </Link>
      </Button>
    </div>
  );
};

export default SidebarInfo;
