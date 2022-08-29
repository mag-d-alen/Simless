import React from "react";
import { useSelector } from "react-redux";
import { deals } from "../../../data/data";
import { DealCard } from "./DealCard";
import { DealsContainer } from "./deals.styled";

export const Deals: React.FC = () => {
  const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);
  return (
      <DealsContainer>
        {deals.map((deal, i) => (
          <DealCard
            key={`${deal}${i}`}
            name={deal.name}
            countries={deal.countries}
          />
        ))}
      </DealsContainer>
  );
};
