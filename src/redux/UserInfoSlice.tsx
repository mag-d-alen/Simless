import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimDataType } from "../data/types";
const initialState = {
  userSimNumber: "",
  simData: {},
};

export type mainReducer = typeof initialState;

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserSimNumber: (state: any, action: PayloadAction<any>) => {
      return { ...state, userSimNumber: "372" + action.payload };
    },
    setSimData: (state: any, action: PayloadAction<SimDataType>) => {
      return { ...state, simData:  action.payload };
    },
  },
});
export const { setUserSimNumber, setSimData } = userInfoSlice.actions;
export default userInfoSlice.reducer;
