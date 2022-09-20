import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userInfoSlice } from "./UserInfoSlice";
import { infoSlice } from "./InfoSlice";
import { simPurchaseSlice } from "./SimPurchaseSlice";
import { topUpSlice } from "./TopUpSlice";
import { simApi } from "./api/simApi";
import { contactApi } from "./api/contactApi";
import { contactSlice } from "./ContactSlice";
import { paymentApi } from "./api/paymentApi";
import { invoiceApi } from "./api/invoiceApi";

const rootReducer = combineReducers({
  [simApi.reducerPath]: simApi.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
  [paymentApi.reducerPath]: paymentApi.reducer,
  [invoiceApi.reducerPath]: invoiceApi.reducer,

  info: infoSlice.reducer,
  userInfo: userInfoSlice.reducer,
  simPurchase: simPurchaseSlice.reducer,
  topUp: topUpSlice.reducer,
  contactUs: contactSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(simApi.middleware)
      .concat(contactApi.middleware)
      .concat(paymentApi.middleware)
      .concat(invoiceApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
