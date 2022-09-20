import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetChosenDeal } from "../../redux/SimPurchaseSlice";
import {
  setCheckoutStep,
  resetUserInvoiceInfo,
  resetUserPaymentInfo,
} from "../../redux/TopUpSlice";

import { DialogContainer } from "./payment.styled";
import { SuccessIcon } from "./SuccessIcon";
import { SuccessContainer } from "../balance/topup/topup.styled";

export const Success = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  return (
    <DialogContainer show={isOpen}>
      <SuccessContainer
        onClick={() => {
          setIsOpen(false);
          dispatch(setCheckoutStep(1));
          dispatch(resetChosenDeal(""));
          dispatch(resetUserInvoiceInfo(null));
          dispatch(resetUserPaymentInfo(null));
        }}>
        Success
        <SuccessIcon />
      </SuccessContainer>
    </DialogContainer>
  );
};
