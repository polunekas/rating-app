import { Button } from "@/components/Button/Button";
import { Htag } from "../components/index";
import React from "react";

const HomePage = (): JSX.Element => {
  return (
    <>
      <div>Добро пожаловать на мой сайт!</div>
      <Htag tag="h3">Текст</Htag>
      <Button appearance={"primary"}>Click</Button>
      <Button appearance={"ghost"}>Click</Button>
    </>
  );
};

export default HomePage;
