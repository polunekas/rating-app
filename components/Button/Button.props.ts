import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  appearance: "primary" | "ghost";
}

export default ButtonProps;
