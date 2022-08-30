import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUnparsedSourceFile } from "typescript";
import { RatesService, SelectedCountryType } from "../data/types";
const initialState = {
  selectedCountries: [],
  ratesService: [],
};

export type mainReducer = typeof initialState;

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setSelectedCountries: (
      state: any,
      action: PayloadAction<SelectedCountryType[]>
    ) => {
      return { ...state, selectedCountries: action.payload };
    },
    setRatesService: (state: any, action: PayloadAction<RatesService>) => {
      return { ...state, ratesService: action.payload };
    },
  },
});
export const { setSelectedCountries, setRatesService } = infoSlice.actions;
export default infoSlice.reducer;
