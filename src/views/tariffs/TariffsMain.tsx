import React from "react";
import { useSelector } from "react-redux";
import { JsxElement } from "typescript";
import { ChooseTariff } from "../chooseTariff/ChooseTariff";
import { Deals } from "../home/deals/Deals";
import { Typography } from "../home/home.styled";

export const TariffsMain: React.FC = () => {
  const { ratesService } = useSelector((s: any) => s.info);
  ratesService && console.log(ratesService[0]);
  return (
    <>
      <Typography>Choose a deal that suits your needs</Typography>
      <ChooseTariff />
      {ratesService
        ? ratesService.map((r: any) => (
            <div key={r.serviceid_name}>service: {r.serviceid_name}</div>
          ))
        : null}
      <Deals />
    </>
  );
};
