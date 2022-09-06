import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../../Loader";

import { BalanceDisplayContainer } from "./checkBalance.styled";

export const DisplayBalance: React.FC<{ data: any; isLoading: boolean }> = ({
  data,
  isLoading,
}) => {
  const { userSimNumber } = useSelector((s: any) => s.userInfo);

  return (
    <BalanceDisplayContainer>
      <div>sim number: {userSimNumber}</div>
      <div>
        balance: {data.balance} {data.curr}
      </div>
    </BalanceDisplayContainer>
  );
};
