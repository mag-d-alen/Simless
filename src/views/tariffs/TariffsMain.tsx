import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChooseTariff } from "../chooseTariff/ChooseTariff";
import { Button } from "../general.styled";
import { Packages } from "../home/packages/Packages";
import { Typography } from "../home/home.styled";
import { useGetPackagesQuery } from "../../redux/api/simQuery";
import { setRatesService } from "../../redux/InfoSlice";

export const TariffsMain: React.FC = () => {
  const [showDeals, setShowDeals] = useState(false);
  const { selectedCountries } = useSelector((s: any) => s.info);

  const { ratesService } = useSelector((s: any) => s.info);
  return (
    <>
      <Typography>Choose a deal that suits your needs</Typography>
      <ChooseTariff />
      {selectedCountries && (
        <>
          <Typography>Your countries:</Typography>
          {selectedCountries.map((c: { value: string; label: string }) => (
            <div key={c.value}>{c.label}</div>
          ))}
        </>
      )}
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
