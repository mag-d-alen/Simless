import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isConditionalExpression } from "typescript";
import { InitialSimPurchaseState } from "../data/types";
const initialState:InitialSimPurchaseState = {
  chosenDeal: [],
};

export type mainReducer = typeof initialState;

export const simPurchaseSlice = createSlice({
  name: "simPurchase",
  initialState,
  reducers: {
    setChosenDeal: (state: InitialSimPurchaseState, action: PayloadAction<string>) => {
      return { ...state, chosenDeal: [...state.chosenDeal, action.payload] };
    },
    resetChosenDeal: (state: InitialSimPurchaseState, action: PayloadAction<string>) => {
      return { ...state, chosenDeal: initialState.chosenDeal };
    },
  },
});
export const { setChosenDeal, resetChosenDeal } = simPurchaseSlice.actions;
export default simPurchaseSlice.reducer;
