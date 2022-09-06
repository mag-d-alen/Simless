import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialUserInfoType, SimDataType } from "../data/types";
const initialState:InitialUserInfoType = {
  userSimNumber: "",
  simData: {
     aserviceid: "",
  balance: "",
  blocked: "",
  curr: "",
  inum: "",
  onum: "",
  prepayed: "",
  tsimid: "",
  },
};

export type mainReducer = typeof initialState;

export const userInfoSlice = createSlice({
         name: "userInfo",
         initialState,
         reducers: {
           setUserSimNumber: (
             state: InitialUserInfoType,
             action: PayloadAction<string>
           ) => {
             return { ...state, userSimNumber: "372" + action.payload };
           },
           setSimData: (
             state: InitialUserInfoType,
             action: PayloadAction<SimDataType>
           ) => {
             return { ...state, simData: action.payload };
           },
         },
       });
export const { setUserSimNumber, setSimData } = userInfoSlice.actions;
export default userInfoSlice.reducer;
