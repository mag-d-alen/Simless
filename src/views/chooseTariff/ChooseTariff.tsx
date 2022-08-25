import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setSelectedCountries } from "../../redux/InfoSlice";
import { countriesList } from "../../data/data";
import { Button, ChooseTariffContainer, TariffSelectContainer } from "./chooseTariffs.styled";

export const ChooseTariff = () => {
  const [countries, setCountries] = useState<any>([]);
  const dispatch = useDispatch();
  return (
    <ChooseTariffContainer>
      <TariffSelectContainer>
        <Select
          options={countriesList}
          isMulti={true}
          onChange={(selected) => {
            setCountries(selected);
          }}
        />
      </TariffSelectContainer>
      <Button onClick={() => dispatch(setSelectedCountries(countries))}>
        submit
      </Button>
    </ChooseTariffContainer>
  );
};
