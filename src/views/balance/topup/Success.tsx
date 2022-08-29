import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetChosenDeal } from "../../../redux/SimPurchaseSlice";
import { setCheckoutStep, resetUserInvoiceInfo, resetUserPaymentInfo } from "../../../redux/TopUpSlice";

import { DialogContainer } from "../../payment/payment.styled";
import { SuccessIcon } from "../../payment/SuccessIcon";
import { SuccessContainer } from "./topup.styled";

export const Success = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  return (
    <DialogContainer show={isOpen}>
      <SuccessContainer
        onClick={() => {
          setIsOpen(false);
          dispatch(setCheckoutStep(1));
          dispatch(resetChosenDeal({}));
          dispatch(resetUserInvoiceInfo({}));
          dispatch(resetUserPaymentInfo({}));
        }}>
        Success
        <SuccessIcon />
      </SuccessContainer>
    </DialogContainer>
  );
};
