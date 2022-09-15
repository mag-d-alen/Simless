import React, { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setSelectedCountries } from "../../redux/InfoSlice";
import { countriesList } from "../../data/data";

import { Button } from "../general.styled";
import { ChoosePackageContainer, PackageSelectContainer } from "./choosePackages.styled";

export const ChoosePackage= () => {
  const [countries, setCountries] = useState<any>([]);
  const dispatch = useDispatch();

  return (
    <>
      <ChoosePackageContainer>
        <PackageSelectContainer>
          <Select
            options={countriesList}
            isMulti={true}
            onChange={(selected) => {
              setCountries(selected);
            }}
          />
        </PackageSelectContainer>
        <Button onClick={() => dispatch(setSelectedCountries(countries))}>
          submit
        </Button>
      </ChoosePackageContainer>
    </>
  );
};
