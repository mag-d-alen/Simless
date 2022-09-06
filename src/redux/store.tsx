import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userInfoSlice } from "./UserInfoSlice";
import { infoSlice } from "./InfoSlice";
import { simPurchaseSlice } from "./SimPurchaseSlice";
import { topUpSlice } from "./TopUpSlice";
import { simApi } from "./api/simQuery";


const rootReducer = combineReducers({
  [simApi.reducerPath]: simApi.reducer,
  info: infoSlice.reducer,
  userInfo: userInfoSlice.reducer,
  simPurchase: simPurchaseSlice.reducer,
  topUp: topUpSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(simApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
