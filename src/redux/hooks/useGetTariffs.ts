import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../../functions/getData";
import { setRatesService } from "../InfoSlice";
import { RatesService } from "../../data/types";
import { AxiosResponse } from "axios";
export const useGetTariffs = () => {
  const dispatch = useDispatch();
  const selectedCountries = useSelector((s: any) => s.info.selectedCountries);

  useEffect(() => {
    if (!selectedCountries.length) return;
    const countryCodes = selectedCountries.map(
      (country: { value: string; label: string }) => {
        for (let [key, value] of Object.entries(country)) {
          if (key === "value") return value;
        }
      }
    );
    getData({ route: "tariffs", params: countryCodes }).then((data: any) => {
      dispatch(setRatesService(data.data.service));
    });
  }, [selectedCountries]);
};
