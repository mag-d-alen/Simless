import React from "react";
import { ChooseTariff } from "./chooseTariff/ChooseTariff";
import { Navbar } from "./navbar/Navbar";

export const Home: React.FC = () => {
  return (
    <div>
      Home
      <ChooseTariff />
    </div>
  );
};
