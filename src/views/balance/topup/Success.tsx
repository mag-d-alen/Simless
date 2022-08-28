import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCheckoutStep } from "../../../redux/UserInfoSlice";
import { CloseButton, DialogContainer } from "../../payment/payment.styled";
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
          dispatch(setCheckoutStep("z"));
        }}>
        Success
        <SuccessIcon />
      </SuccessContainer>
    </DialogContainer>
  );
};
