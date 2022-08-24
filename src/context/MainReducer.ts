import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUnparsedSourceFile } from "typescript";
import { SelectedCountryType } from "../data/types";
const initialState = {
  selectedCountries: [],
  userNumber: "",
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
    setUserNumber: (state: any, action: PayloadAction<string>) => {
      return { ...state, userNumber: `372${action.payload}` };
    },
  },
});
export const { setSelectedCountries, setUserNumber } = infoSlice.actions;
export default infoSlice.reducer;
