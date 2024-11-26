import { PtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({
  size = "M",
  children,
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.pSmall]: size == "S",
        [styles.pMedium]: size == "M",
        [styles.pLarge]: size == "L",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
