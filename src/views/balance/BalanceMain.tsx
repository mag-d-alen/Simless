import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetSimBalanceQuery } from "../../redux/api/simApi";
import { Loader } from "../Loader";
import { CheckBalance } from "./checkBalance/CheckBalance";
import { DisplayBalance } from "./checkBalance/DisplayBalance";
import { ToggleAccountActions } from "./toggle/ToggleAccountActions";
import { BalanceMainContainer } from "./topup/topup.styled";
import { TopUpMain } from "./topup/TopUpMain";

export const BalanceMain: React.FC = () => {
  const [isCheckOn, setIsCheckOn] = useState(true);
  const userSimNumber = useSelector((s: any) => s.userInfo.userSimNumber);
  const { data, isLoading, isSuccess, isError, error } = useGetSimBalanceQuery(
    userSimNumber
  );
  const handleToggle = () => {
    setIsCheckOn(!isCheckOn);
  };
  return (
    <BalanceMainContainer>
      <ToggleAccountActions handleToggle={handleToggle} isCheckOn={isCheckOn} />
      {!isCheckOn ? (
        <TopUpMain />
      ) : (
        <>
          <CheckBalance />
          {isLoading && <Loader />}
          {userSimNumber && isSuccess ? (
            <DisplayBalance data={data} isLoading={isLoading} />
          ) : null}
        </>
      )}
    </BalanceMainContainer>
  );
};
