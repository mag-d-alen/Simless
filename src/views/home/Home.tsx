import React from "react";
import { PaymentSteps } from "../payment/PaymentSteps";
import { ChooseTariff } from "../chooseTariff/ChooseTariff";
import { Deals } from "./deals/Deals";
import { HomeContainer, Typography } from "./home.styled";
import { useSelector } from "react-redux";

export const Home: React.FC = () => {
  const chosenDeal = useSelector((s: any) => s.simPurchase.chosenDeal);
  const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);
  return (
    <HomeContainer>
      {chosenDeal.length && checkoutStep > 1 ? (
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
