import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./UserInfoSlice";
import { infoSlice } from "./InfoSlice";
export const store = configureStore({
  reducer: {
    info: infoSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
