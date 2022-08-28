import React from "react";
import { deals } from "../../../data/data";
import { DealCard } from "./DealCard";
import { DealsContainer } from "./deals.styled";

export const Deals: React.FC = () => {
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
