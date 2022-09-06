import React from "react";
import { useSelector } from "react-redux";
import { packages } from "../../../data/data";
import { PackageCard } from "./PackageCard";
import { PackagesContainer } from "./packages.styled";

export const Packages: React.FC = () => {
  const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);
  return (
      <PackagesContainer>
        {packages.map((p, i) => (
          <PackageCard
            key={`${p}${i}`}
            name={p.name}
            countries={p.countries}
          />
        ))}
      </PackagesContainer>
  );
};
