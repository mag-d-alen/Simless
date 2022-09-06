import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { setLoading, setRatesService } from "../InfoSlice";
import { useGetPackagesQuery } from "../api/simQuery";

export const useGetTariffs = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isError, error } = useGetPackagesQuery(
    {}
  );
  useEffect(() => {
    if (!data && !isLoading) return;
    // dispatch(setLoading(!!isLoading));

    // const countryCodes = selectedCountries.map(
    //   (country: { value: string; label: string }) => {
    //     for (let [key, value] of Object.entries(country)) {
    //       if (key === "value") return value;
    //     }
    //   }
    // );
    // getData({ route: "tariffs", params: countryCodes }).then((data: any) => {

    // });
  }, [isLoading, isSuccess, isError]);
  // useEffect(() => {
  //   dispatch(setRatesService(data.data.service));
  // }, [data]);
};
