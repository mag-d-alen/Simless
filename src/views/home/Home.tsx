import React from "react";
import { BalanceMain } from "../balance/BalanceMain";
import { PaymentSteps } from "../payment/PaymentSteps";
import { ChooseTariff } from "../chooseTariff/ChooseTariff";
import { Deals } from "./deals/Deals";
import { HomeContainer, Typography } from "./home.styled";
import { useSelector } from "react-redux";

export const Home: React.FC = () => {
  const chosenDeal = useSelector((s: any) => s.userInfo.chosenDeal);
  return (
    <HomeContainer>
      {chosenDeal.name ? (
        <PaymentSteps />
      ) : (
        <>
          <Typography>Choose a deal that suits your needs</Typography>
          <ChooseTariff />
          <Deals />
        </>
      )}
    </HomeContainer>
  );
};
