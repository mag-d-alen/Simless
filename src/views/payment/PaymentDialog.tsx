import React from "react";
import { useDispatch } from "react-redux";
import { setCheckoutStep } from "../../redux/UserInfoSlice";
import { CloseButton, DialogContainer, IFrame } from "./payment.styled";

export const PaymentDialog: React.FC<{
  isOpen: boolean;
  close: () => void;
}> = ({ isOpen, close }) => {
  const dispatch = useDispatch();

  return (
    <DialogContainer show={isOpen}>
      <CloseButton
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setCheckoutStep("f"));
          close();
        }}>
        X
      </CloseButton>
      <IFrame src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></IFrame>
    </DialogContainer>
  );
};
