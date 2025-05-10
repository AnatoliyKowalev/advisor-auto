import * as React from "react";

import { useScreen } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { FC } from "react";
import { FeekbackModalProps } from "./interfaces";
import FeedbackStars from "@/components/shared/feedback-stars";

const FeekbackModal: FC<FeekbackModalProps> = ({
  user,
  comment,
  stars,
  ...rest
}) => {
  const isDesktop = useScreen();

  if (isDesktop) {
    return (
      <Dialog {...rest}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="px-0 gap-4">
            <DialogTitle>Відгук від: {user}</DialogTitle>
            <FeedbackStars stars={stars} />
          </DialogHeader>
          <p className="overflow-y-scroll max-h-[50vh]">{comment}</p>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer {...rest}>
      <DrawerContent className="px-6">
        <DrawerHeader className="px-0 gap-4">
          <DrawerTitle>Відгук від: {user}</DrawerTitle>
          <FeedbackStars stars={stars} />
        </DrawerHeader>
        <p className="overflow-y-scroll max-h-[50vh]">{comment}</p>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button className="mt-10" variant="outline" size="lg">
              Закрити
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FeekbackModal;
