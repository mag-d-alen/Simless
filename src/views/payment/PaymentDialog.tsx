import React from "react";
import { Button } from "../general.styled";
import { CardMain } from "./card/CardMain";

import {
  DialogBodyContainer,
  DialogContainer,
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
      </DialogBodyContainer>
    </DialogContainer>
  );
};
