"use client";

import { RatingProps } from "./Rating.props";
import { useEffect, useState, KeyboardEvent } from "react";
import styles from "./Rating.module.css";
import cn from "classnames";
import Image from "next/image";
import StarIcon from "./star.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onFunctionClick(i + 1)}
        >
          <StarIcon
            width={20}
            height={20}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              isEditable && handleSpace(i + 1, e);
            }}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (m: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(m);
  };

  const onFunctionClick = (p: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(p);
  };

  const handleSpace = (l: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != "Space" || !setRating) {
      return;
    }
    setRating(l);
  };
  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
