// Dependencias
import React from "react";

// Components defined
import { TopPage } from "../top/top";
import { Cards } from "../cards/cards";

export const HomePage: React.FC<{}> = () => {
  return (
    <>
      <TopPage />
      <Cards />
    </>
  );
};
