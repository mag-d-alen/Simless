import React, { useState } from "react";
import { CheckBalance } from "./checkBalance/CheckBalance";
import { DisplayBalance } from "./checkBalance/DisplayBalance";
import { ToggleAccountActions } from "./toggle/ToggleAccountActions";
import { BalanceMainContainer } from "./topup/topup.styled";
import { TopUpMain } from "./topup/TopUpMain";

export const BalanceMain: React.FC = () => {
  const [isCheckOn, setIsCheckOn] = useState(true);

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
          <DisplayBalance />
        </>
      )}
    </BalanceMainContainer>
  );
};
