import React from "react";
import { GoBack } from "./GoBack";
import { StepProgress } from "./StepProgress";
import { TopUpMainContainer, TopupTopBar } from "./topup.styled";
import { PaymentSteps } from "../../payment/PaymentSteps";
import { TopUpBalance } from "./TopUpBalance";
import { useSelector } from "react-redux";

export const TopUpMain: React.FC = () => {
  const checkoutStep = useSelector((s: any) => s.userInfo.checkoutStep);
  return (
    <TopUpMainContainer>
      <TopupTopBar>
        <StepProgress />
        {checkoutStep > 1 && <GoBack />}
        {checkoutStep === 1 && <TopUpBalance />}
        {checkoutStep > 1 && <PaymentSteps />}
      </TopupTopBar>
    </TopUpMainContainer>
  );
};
