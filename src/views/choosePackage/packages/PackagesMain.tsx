import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChoosePackage } from "../ChoosePackage";
import { Button } from "../../general.styled";
import { Packages } from "./Packages";
import { Typography } from "../../home/home.styled";

export const PackagesMain: React.FC = () => {
  const [showDeals, setShowDeals] = useState(false);
  const { selectedCountries } = useSelector((s: any) => s.info);
  const { ratesService } = useSelector((s: any) => s.info);
  return (
    <>
      <Typography>Choose a deal that suits your needs</Typography>
      <ChoosePackage />
      {selectedCountries.length ? (
        <>
          <Typography>Your countries:</Typography>
          {selectedCountries.map((c: { value: string; label: string }) => (
            <div key={c.value}>{c.label}</div>
          ))}
        </>
      ) : null}
      <Button
        onClick={() => {
          setShowDeals(!showDeals);
        }}>
        {showDeals ? "Hide" : "Show"} Available Deals
      </Button>
      {showDeals && ratesService.length ? (
        <>
          <Typography>Available Packages</Typography>
          {ratesService.map((r: any) => (
            <div key={r.serviceid_name}>service: {r.serviceid_name}</div>
          ))}
        </>
      ) : null}
      <Packages />
    </>
  );
};
