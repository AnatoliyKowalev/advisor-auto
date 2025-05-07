import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import React, { FC } from "react";
import { TeammateCardProps } from "./interfaces";
import { Facebook } from "lucide-react";

const TeammateCard: FC<TeammateCardProps> = ({ photo, name, role, link }) => {
  return (
    <Card className="text-center shadow-none w-[250px] border-none p-0 gap-2">
      <Image
        src={photo}
        alt={name}
        width={300}
        height={300}
        className="w-full h-64 object-cover rounded-full p-[20px]"
      />
      <CardContent>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground h-[3rem]">{role}</p>
      </CardContent>
      <CardFooter className="justify-center p-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <Facebook className="w-5 h-5" />
          Facebook
        </a>
      </CardFooter>
    </Card>
  );
};

export default TeammateCard;
