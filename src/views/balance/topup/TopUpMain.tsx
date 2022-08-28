import React from "react";
import { GoBack } from "./GoBack";
import { StepProgress } from "./StepProgress";
import { TopUpMainContainer, TopupTopBar } from "./topup.styled";
import { TopUpSteps } from "./TopUpSteps";

export const TopUpMain = () => {
  return (
    <TopUpMainContainer>
      <TopupTopBar>
        <StepProgress />
        <GoBack />
      </TopupTopBar>
      <TopUpSteps />
    </TopUpMainContainer>
  );
};
