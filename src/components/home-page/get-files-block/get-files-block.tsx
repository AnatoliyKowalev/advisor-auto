import { Button } from "@/components/ui/button";
import { HardDriveDownload } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

const GetFilesBlock: FC = () => {
  return (
    <div className="container mx-auto flex grid place-items-center grid-cols-1 md:grid-cols-12 h-screen py-20 md:py-0">
      <div className="flex flex-col md:col-span-7 w-full">
        <Image
          src="/img/hyundai-santa-fe.png"
          width={800}
          height={800}
          alt="hyunday santa fe"
        />
      </div>
      <div className="flex flex-col gap-5 md:col-span-5 md:col-start-8">
        <div className="text-3xl font-bold">
          Отримайте чек-лист інструкції
          <br />з імпорту Авто з Кореї
        </div>
        <p>
          Якщо вас цікавить обʼєм інформації, який отримує кожен клієнт, що
          замовив перевірку авто нашими експертами, натисніть нижче
        </p>
        <Button size="lg" asChild>
          <a
            href="/pdf/detalna-instrukcziya-importu-avto-z-pivdennoї-koreї.pdf"
            className="mt-8 button primary"
            download
          >
            Отримати чек-лист <HardDriveDownload />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default GetFilesBlock;
