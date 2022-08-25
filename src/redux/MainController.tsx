import React from "react";
import { useGetBalance } from "./hooks/useGetBalance";
import { useGetTariffs } from "./hooks/useGetTariffs";

export const MainController = () => {
  useGetTariffs();
  useGetBalance();
  return <></>;
};
