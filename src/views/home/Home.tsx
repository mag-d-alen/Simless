import React from "react";
import { BalanceMain } from "../balance/BalanceMain";
import { ChooseTariff } from "../chooseTariff/ChooseTariff";
import { Typography } from "./home.styled";

export const Home: React.FC = () => {
  return (
    <div>
     <Typography>Choose a deal that suits your needs</Typography> 
      <ChooseTariff />
    </div>
  );
};
