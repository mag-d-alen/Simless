import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TopUpResponseType } from "../../data/types";
import { url } from "../../data/data";

export const simApi = createApi({
  tagTypes: ["Packages"],
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getSimBalance: builder.query({
      query: (name: string) => `balance${name}`,
    }),

    getPackages: builder.query({
      query: () => `tariffs`,
      providesTags: ["Packages"],
    }),

    topUpSim: builder.mutation<
      TopUpResponseType,
      { num: string; amount: string; orderId: number }
    >({
      query: ({ num, amount, orderId }) => ({
        url: `topUp${num}`,
        method: "POST",
        body: { amount: amount, orderId: orderId },
      }),
    }),
  }),
});
export const {
  useGetSimBalanceQuery,
  useGetPackagesQuery,
  useTopUpSimMutation,
} = simApi;
