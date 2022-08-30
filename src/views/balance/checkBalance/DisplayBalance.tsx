import React from "react";
import { useSelector } from "react-redux";
import { BalanceDisplayContainer } from "./checkBalance.styled";

export const DisplayBalance: React.FC = () => {
  const { userSimNumber, simData } = useSelector((s: any) => s.userInfo);
  return (
    <BalanceDisplayContainer>
      {userSimNumber ? <div>sim number: {userSimNumber}</div> : null}
      {simData.balance ? (
        <div>
          balance: {simData.balance} {simData.curr}
        </div>
      ) : null}
    </BalanceDisplayContainer>
  );
};
