import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectedCountryType } from "../data/types";
const initialState = {
  userSimNumber: "",
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

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserSimNumber: (state: any, action: PayloadAction<any>) => {
      return { ...state, userSimNumber: action.payload };
    },
    setUserInvoiceInfo: (state: any, action: PayloadAction<any>) => {
      return { ...state, invoice: action.payload };
    },
    setUserPaymentInfo: (state: any, action: PayloadAction<any>) => {
      return { ...state, payment: action.payload };
    },
    setCheckoutStep: (state: any, action: PayloadAction<string>) => {
      if (action.payload === "f" && state.checkoutStep < 4)
        return { ...state, checkoutStep: state.checkoutStep + 1 };
      else if (action.payload === "b" && state.checkoutStep > 1)
        return { ...state, checkoutStep: state.checkoutStep - 1 };
       return { ...state, checkoutStep: initialState.checkoutStep };
    },
  },
});
export const {
  setUserSimNumber,
  setUserInvoiceInfo,
  setUserPaymentInfo,
  setCheckoutStep,
} = userInfoSlice.actions;
export default userInfoSlice.reducer;
