import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectedCountryType } from "../data/types";
const initialState = {
  topUpSimNumber: "",
  invoice: {
    first_Name: "",
    last_Name: "",
    sim: "",
    email: "",
    phone: "",
    additionalPhone: "",
  },
  payment: {
    first_Name: "",
    last_Name: "",
    sim: "",
    email: "",
    phone: "",
    additionalPhone: "",
  },
  checkoutStep: 1,
};

export type mainReducer = typeof initialState;

export const topUpSlice = createSlice({
  name: "topUp",
  initialState,
  reducers: {
    setTopUpSimNumber: (state: any, action: PayloadAction<any>) => {
      return { ...state, userSimNumber: action.payload };
    },
    setUserInvoiceInfo: (state: any, action: PayloadAction<any>) => {
      return { ...state, invoice: action.payload };
    },
    setUserPaymentInfo: (state: any, action: PayloadAction<any>) => {
      return { ...state, payment: action.payload };
    },
    resetUserInvoiceInfo: (state: any, action: PayloadAction<any>) => {
      return { ...state, invoice: initialState.invoice };
    },
    resetUserPaymentInfo: (state: any, action: PayloadAction<any>) => {
      return { ...state, payment: initialState.payment };
    },
    setCheckoutStep: (state: any, action: PayloadAction<string | number>) => {
      if (action.payload === "b" && state.checkoutStep > 1) {
        return { ...state, checkoutStep: state.checkoutStep - 1 };
      }
      return { ...state, checkoutStep: action.payload };
    },
  },
});
export const {
  setTopUpSimNumber,
  setUserInvoiceInfo,
  setUserPaymentInfo,
  setCheckoutStep,
  resetUserInvoiceInfo,
  resetUserPaymentInfo,
} = topUpSlice.actions;
export default topUpSlice.reducer;
