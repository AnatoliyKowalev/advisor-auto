import React, { FC } from "react";
import PlayerVideo from "@/components/shared/player-video";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlayCircleIcon } from "lucide-react";

const WelcomeModal: FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <div
        className="flex mt-4 items-center justify-center md:justify-start gap-4 cursor-pointer group"
        role="button"
      >
        <PlayCircleIcon className="rounded-full w-12 h-12 text-primary transition-shadow duration-300 group-hover:shadow-[0_0_15px_#a6f4c5]" />
        <span className="font-[500]">Дізнатись більше</span>
      </div>
    </DialogTrigger>
    <DialogContent className="p-0 min-w-[60vw] rounded-0 border-none">
      <DialogHeader className="hidden">
        <DialogTitle>Edit profile</DialogTitle>
      </DialogHeader>
      <PlayerVideo video="https://vimeo.com/928787314" />
    </DialogContent>
  </Dialog>
);

export default WelcomeModal;
