import React from "react";
import { useDispatch } from "react-redux";
import {
  setCheckoutStep,
  resetUserInvoiceInfo,
  resetUserPaymentInfo,
} from "../../redux/UserInfoSlice";
import {
  CloseButton,
  DialogBodyContaier,
  DialogContainer,
  IFrame,
} from "./payment.styled";

export const PaymentDialog: React.FC<{
  isOpen: boolean;
  close: () => void;
}> = ({ isOpen, close }) => {
  const dispatch = useDispatch();

  return (
    <DialogContainer show={isOpen}>
      <DialogBodyContaier>
        <CloseButton
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setCheckoutStep(4));
            close();
          }}>
          X
        </CloseButton>
        <IFrame src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></IFrame>
      </DialogBodyContaier>
    </DialogContainer>
  );
};
