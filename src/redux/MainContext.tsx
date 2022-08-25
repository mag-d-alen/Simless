import React, { useContext } from "react";
import { createContext, useState } from "react";
import { ContextType, SelectedCountryType } from "../data/types";

export const MainContext = React.createContext<ContextType>({
  setSelectedCountries: () => {},
});
