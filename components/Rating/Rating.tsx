"use client";

import { RatingProps } from "./Rating.props";
import { useEffect, useState } from "react";
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
        <StarIcon
          alt="star"
          src="/star.svg"
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
          })}
          width={20}
          height={20}
        />
      );
    });
    setRatingArray(updatedArray);
  };
  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
