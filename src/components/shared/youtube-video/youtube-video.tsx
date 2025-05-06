import React, { FC, useState } from "react";
import ReactPlayer from "react-player";
import { YoutubeVideoProps } from "./interfaces";
import CustomIcon from "../custom-icon";

const YoutubeVideo: FC<YoutubeVideoProps> = ({ preview, video }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="rounded-[4px] bg-secondary relative w-full max-w-4xl mx-auto aspect-video overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.65)] flex items-center justify-center [&>div]:!w-full [&>div]:!h-full">
      {isActive ? (
        <ReactPlayer
          url={video}
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
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

export default YoutubeVideo;
