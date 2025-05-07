import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { brands } from "./constants";

const LogosSlide: FC = ({ ...rest }) => {
  return (
    <div className="inline-flex animate-[slide_120s_linear_infinite]" {...rest}>
      {brands.map(({ link, src, name }) => (
        <Link
          href={link}
          className="flex items-center justify-center mx-[40px] h-[100px] w-[150px]"
          target="_blank"
          rel="noopener noreferrer"
          key={name}
        >
          <Image
            src={src}
            className="w-full object-contain"
            width={200}
            height={150}
            alt={name}
          />
        </Link>
      ))}
    </div>
  );
};

export default LogosSlide;
