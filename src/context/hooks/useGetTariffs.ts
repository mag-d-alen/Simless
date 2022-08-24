import axios from "axios";
import { useSelector } from "react-redux";
import { ContextType, useContext, useEffect, useState } from "react";
import { MainContext } from "../MainContext";
import { getData } from "../../functions/getData";
import { object, string } from "yup";
import { isLabeledStatement } from "typescript";

export const useGetTariffs = () => {
  const selectedCountries = useSelector(
    (s: any) => s.info.selectedCountries
  );
  const [data, setData] = useState<any>();
  useEffect(() => {
    if (!selectedCountries.length) return;
    const countryCodes = selectedCountries.map(
      (country: { value: string; label: string }) => {
        for (let [key, value] of Object.entries(country)) {
          if (key === "value") return value;
        }
      }
    );
    setData(getData({ route: "tariffs", params: countryCodes }));
    console.log(data);
  }, [selectedCountries]);
  return data;
};
