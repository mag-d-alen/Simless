import React from "react";
import { useSelector } from "react-redux";
import { UserDetails } from "../form/UserDetails";
import { PaymentMain } from "./PaymentMain";
import { Success } from "../balance/topup/Success";

export const PaymentSteps: React.FC = () => {
  const { checkoutStep, payment } = useSelector((s: any) => s.userInfo);
  return (
    <>
      {checkoutStep === 2 ? (
        // Object.values(payment).some((v) => v !== "") ? null : (
        <UserDetails />
      ) : null}
      {checkoutStep === 3 ? <PaymentMain /> : null}
      {checkoutStep === 4 ? <Success /> : null}
    </>
  );
};
