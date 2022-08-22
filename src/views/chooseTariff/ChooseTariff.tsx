import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { countries } from "../../countries";
import { SelectedCountry } from "../../types";
const url = "http://localhost:8000";

export const ChooseTariff = () => {
  const [selectedCountries, setSelectedCountries] = useState<
    SelectedCountry | undefined
  >();
  const handleUpdateSelected = (selected: SelectedCountry) => {
    setSelectedCountries(selected);
  };
  useEffect(() => {
    console.log(selectedCountries);
    try {
      const tarifs = axios.get(`${url}/tariffs`);
      console.log(tarifs);
    } catch (error) {
      console.log(error);
    }
  }, [selectedCountries]);

  return (
    <Select
      options={countries}
      isMulti={true}
      onChange={(selected) => setSelectedCountries(selected)}
    />
  );
};
