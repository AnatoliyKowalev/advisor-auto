import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { TypeContentfulCar } from "@/types/cars";
import { Images } from "lucide-react";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

const AlbumCarousel: FC<TypeContentfulCar> = ({ fields }) => {
  const { album } = fields;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        className="[&>.overflow-hidden]:z-[0] [&>.overflow-hidden]:relative"
      >
        <CarouselContent className="relative">
          {album.map((photo, idx) => {
            const src = photo.fields.file.url;

            return (
              <CarouselItem key={src}>
                <div className="w-full aspect-[16/9] relative">
                  <Image
                    src={`https:${src}`}
                    className="object-cover"
                    alt={`${idx} фото авто`}
                    fill
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="py-2 text-center text-sm text-white absolute bg-black/50 top-2 left-2 md:top-[3%] md:left-[8%] px-3 flex items-center gap-2">
        <Images size={16} /> {current} з {count}
      </div>
      <div className="flex gap-2 mt-2 overflow-x-scroll w-full">
        {album.map((photo, idx) => {
          const src = photo.fields.file.url;

          return (
            <div
              onClick={() => {
                api?.scrollTo(idx);
              }}
              className={cn(
                "flex cursor-pointer min-w-[150px] w-[150px] h-[90px]",
                {
                  "relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-red-500":
                    current === idx + 1,
                }
              )}
              key={idx}
            >
              <Image
                src={`https:${src}`}
                className="object-cover w-full h-full"
                width={150}
                height={80}
                alt={`${idx} фото авто маленька версія`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AlbumCarousel;
