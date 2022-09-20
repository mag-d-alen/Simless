import React from "react";
import { PaymentSteps } from "../payment/PaymentSteps";
import { HomeContainer, Typography } from "./home.styled";
import { useSelector } from "react-redux";
import { PackagesMain } from "../choosePackage/packages/PackagesMain";

export const Home: React.FC = () => {
  const chosenDeal = useSelector((s: any) => s.simPurchase.chosenDeal);
  const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);
  return (
    <HomeContainer>
      {chosenDeal.length && checkoutStep > 1 ? (
        <PaymentSteps />
      ) : (
        <PackagesMain />
      )}
    </HomeContainer>
  );
};
