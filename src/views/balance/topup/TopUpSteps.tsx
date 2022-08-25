import React from "react";
import { useSelector } from "react-redux";
import { UserDetails } from "../../form/UserDetails";
import { PaymentMain } from "../../payment/PaymentMain";
import { StepProgress } from "./StepProgress";
import { Success } from "./Success";
import { TopUpBalance } from "./TopUpBalance";

export const TopUpSteps: React.FC = () => {
  const { checkoutStep, payment } = useSelector((s: any) => s.userInfo);
  return (
    <>
 
      {checkoutStep === 1 ? <TopUpBalance /> : null}
      {checkoutStep === 2 ? (
        Object.values(payment).some((v) => v !== "") ? null : (
          <UserDetails />
        )
      ) : null}
      {checkoutStep === 3 ? <PaymentMain /> : null}
      {checkoutStep === 4 ? <Success /> : null}
    </>
  );
};
