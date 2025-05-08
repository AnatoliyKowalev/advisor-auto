import { DialogProps } from "@radix-ui/react-dialog";

export interface FeekbackModalProps extends DialogProps {
  comment: string;
  stars: number;
  user: string;
}
