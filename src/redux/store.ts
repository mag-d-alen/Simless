import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./UserInfoSlice";
import { infoSlice } from "./InfoSlice";
import { simPurchaseSlice } from "./SimPurchaseSlice";
import { topUpSlice } from "./TopUpSlice";
export const store = configureStore({
  reducer: {
    info: infoSlice.reducer,
    userInfo: userInfoSlice.reducer,
    simPurchase: simPurchaseSlice.reducer,
    topUp: topUpSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
