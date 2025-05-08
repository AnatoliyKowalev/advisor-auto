import React, { FC, useState } from "react";
import ReactPlayer from "react-player";
import { PlayerVideoProps } from "./interfaces";
import CustomIcon from "../custom-icon";
import { cn } from "@/lib/utils";

const PlayerVideo: FC<PlayerVideoProps> = ({ preview, video, className }) => {
  const [isActive, setIsActive] = useState(!preview);

  return (
    <div
      className={cn(
        "rounded-[4px] bg-secondary relative w-full max-w-4xl mx-auto aspect-video overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.65)] flex items-center justify-center [&>div]:!w-full [&>div]:!h-full",
        className
      )}
    >
      {isActive ? (
        <ReactPlayer
          url={video}
          playing
          controls
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                controls: 1,
              },
            },
          }}
        />
      ) : (
        <>
          <img
            className="absolute inset-0 w-full h-full cursor-pointer"
            onClick={() => setIsActive(true)}
            src={preview}
            alt="youtube video"
          />
          <CustomIcon
            icon="youtube"
            className="absolute text-[80px] z-[2] text-destructive pointer-events-none"
          />
        </>
      )}
    </div>
  );
};

export default PlayerVideo;
