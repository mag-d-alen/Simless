import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  userSimNumber: "",
};

export type mainReducer = typeof initialState;

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserSimNumber: (state: any, action: PayloadAction<any>) => {
      return { ...state, userSimNumber: action.payload };
    },
  },
});
export const { setUserSimNumber } = userInfoSlice.actions;
export default userInfoSlice.reducer;
