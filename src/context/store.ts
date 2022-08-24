import { configureStore } from "@reduxjs/toolkit";
import { infoSlice } from "./MainReducer";
export const store = configureStore({
         reducer: {
           info: infoSlice.reducer,
         },
       });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
