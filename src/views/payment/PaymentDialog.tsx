import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTopUpSimMutation } from "../../redux/api/simQuery";
import { setCheckoutStep, setOrderId } from "../../redux/TopUpSlice";

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
  const [topUpSim] = useTopUpSimMutation();
  const { topUpSimNumber, topUpAmount, orderId } = useSelector(
    (s: any) => s.topUp
  );
  return (
    <DialogContainer show={isOpen}>
      <DialogBodyContaier>
        <CloseButton
          onClick={(e) => {
            e.stopPropagation();
            topUpSim({
              num: topUpSimNumber,
              amount: topUpAmount,
              orderId: orderId,
            });
            dispatch(setCheckoutStep(4));
            dispatch(setOrderId(1));
            close();
          }}>
          X
        </CloseButton>
        <IFrame src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></IFrame>
      </DialogBodyContaier>
    </DialogContainer>
  );
};
