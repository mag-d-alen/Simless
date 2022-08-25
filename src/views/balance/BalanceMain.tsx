import React, { useState } from "react";
import { CheckBalance } from "./checkBalance/CheckBalance";
import { DisplayBalance } from "./checkBalance/DisplayBalance";
import { ToggleAccountActions } from "./toggle/ToggleAccountActions";
import { GoBack } from "./topup/GoBack";
import { StepProgress } from "./topup/StepProgress";
import { BalanceMainContainer, TopupTopBar } from "./topup/topup.styled";
import { TopUpSteps } from "./topup/TopUpSteps";

export const BalanceMain: React.FC = () => {
  const [isCheckOn, setIsCheckOn] = useState(true);

  const handleToggle = () => {
    setIsCheckOn(!isCheckOn);
  };
  return (
    <BalanceMainContainer>
      <ToggleAccountActions handleToggle={handleToggle} isCheckOn={isCheckOn} />

      {!isCheckOn ? (
        <>
          <TopupTopBar>
            <GoBack /> <StepProgress />
          </TopupTopBar>
          <TopUpSteps />
        </>
      ) : (
        <>
          <CheckBalance />
          <DisplayBalance />
        </>
      )}
    </BalanceMainContainer>
  );
};
