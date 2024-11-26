import { PtagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  size = "M",
  children,
  color = "ghost",
  className,
  href,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.tag, className, {
        [styles.s]: size == "S",
        [styles.m]: size == "M",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.green]: color == "green",
        [styles.gray]: color == "gray",
        [styles.primary]: color == "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </p>
  );
};
