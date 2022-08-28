import React from "react";
import { BalanceMain } from "../balance/BalanceMain";
import { ChooseTariff } from "../chooseTariff/ChooseTariff";
import { Deals } from "./deals/Deals";
import { HomeContainer, Typography } from "./home.styled";

export const Home: React.FC = () => {
  return (
    <HomeContainer>
     <Typography>Choose a deal that suits your needs</Typography> 
      <ChooseTariff />
      <Deals/>
    </HomeContainer>
  );
};
