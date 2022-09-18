import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { cardPaymentUri } from "../../data/data";
import {
  CardPaymentInputType,
  CardPaymentResponseType,
} from "../../data/types";

export const paymentApi = createApi({
  reducerPath: "cardPayment",
  baseQuery: fetchBaseQuery({ baseUrl: cardPaymentUri }),
  endpoints: (builder) => ({
    makeCardPayment: builder.mutation<
      CardPaymentResponseType,
      CardPaymentInputType
    >({
      query: ({ name, amount, cardNumber, expiry_Date, cvv }) => ({
        url: "cardPayment",
        method: "POST",
        body: { name, amount, cardNumber, expiry_Date, cvv },
      }),
    }),
  }),
});

export const { useMakeCardPaymentMutation } = paymentApi;
