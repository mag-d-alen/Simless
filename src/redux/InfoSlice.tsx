import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialInfoStateType, RatesService, SelectedCountryType } from "../data/types";
const initialState: InitialInfoStateType = {
  selectedCountries: [],
  ratesService: [],
  loading: false,
};


export const infoSlice = createSlice({
         name: "info",
         initialState,
         reducers: {
           setSelectedCountries: (
             state: InitialInfoStateType,
             action: PayloadAction<string[]>
           ) => {
             return { ...state, selectedCountries: action.payload };
           },
           setRatesService: (
             state: InitialInfoStateType,
             action: PayloadAction<RatesService>
           ) => {
             return { ...state, ratesService: action.payload };
           },
           setLoading: (
             state: InitialInfoStateType,
             action: PayloadAction<boolean>
           ) => {
             return { ...state, loading: action.payload };
           },
         },
       });
export const {
  setSelectedCountries,
  setRatesService,
  setLoading,
} = infoSlice.actions;
export default infoSlice.reducer;
