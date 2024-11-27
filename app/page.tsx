"use client";
import { Htag } from "../components/index";
import React, { useState } from "react";
import { Ptag, Tag, Rating, Button } from "../components";

const HomePage = (): JSX.Element => {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <div>Добро пожаловать на мой сайт!</div>
      <Htag tag="h3">Текст</Htag>
      <Button appearance={"primary"}>Click</Button>
      <Button appearance={"ghost"}>Click</Button>
      <Tag color="primary">Smth</Tag>
      <Tag color="green">Smth</Tag>
      <Tag size="M" color="red">
        Smth
      </Tag>
      <Tag size="S" color="red">
        Smth
      </Tag>
      <Tag color="primary">Smth</Tag>
      <Tag>Smth</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
};

export default HomePage;
