import { Htag } from "../components/index";
import React from "react";

const HomePage = (): JSX.Element => {
  return (
    <>
      <div>Добро пожаловать на мой сайт!</div>
      <Htag tag="h3">Привет</Htag>
    </>
  );
};

export default HomePage;
