import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isConditionalExpression } from "typescript";
const initialState = {
  chosenDeal: [],
};

export type mainReducer = typeof initialState;

export const simPurchaseSlice = createSlice({
  name: "simPurchase",
  initialState,
  reducers: {
    setChosenDeal: (state: any, action: PayloadAction<any>) => {
      return { ...state, chosenDeal: [...state.chosenDeal, action.payload] };
    },
    resetChosenDeal: (state: any, action: PayloadAction<any>) => {
      return { ...state, chosenDeal: initialState.chosenDeal };
    },
  },
});
export const { setChosenDeal, resetChosenDeal } = simPurchaseSlice.actions;
export default simPurchaseSlice.reducer;
