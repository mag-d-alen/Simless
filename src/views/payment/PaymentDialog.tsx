import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTopUpSimMutation } from "../../redux/api/simApi";
import { setCheckoutStep, setOrderId } from "../../redux/TopUpSlice";
import { Button } from "../general.styled";
import { CardMain } from "./card/CardMain";

import {
  CloseButton,
  DialogBodyContainer,
  DialogContainer,
  IFrame,
} from "./payment.styled";

export const PaymentDialog: React.FC<{
  isOpen: boolean;
  close: () => void;
}> = ({ isOpen, close }) => {

  return (
    <DialogContainer show={isOpen}>
      <DialogBodyContainer>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            close();
          }}>
          CANCEL
        </Button>
        <CardMain />
        {/* <IFrame src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></IFrame> */}
      </DialogBodyContainer>
    </DialogContainer>
  );
};
