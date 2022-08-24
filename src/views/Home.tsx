import React from "react";
import { getData } from "../functions/getData";
import { BalanceMain } from "./balance/BalanceMain";
import { ChooseTariff } from "./chooseTariff/ChooseTariff";
import { Button } from "./chooseTariff/chooseTariffs.styled";
import { UserForm } from "./form/Form";
import { Navbar } from "./navbar/Navbar";

export const Home: React.FC = () => {

  return (
    <div>
      <ChooseTariff />
      <BalanceMain />
      
    </div>
  );
};
