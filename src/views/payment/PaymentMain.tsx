import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../chooseTariff/chooseTariffs.styled";
import { PaymentDialog } from "./PaymentDialog";

export const PaymentMain: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { checkoutStep } = useSelector((s: any) => s.userInfo);
  return (
    <>
      {checkoutStep === 3 ? <Button onClick={() => setDialogOpen(true)}>Proceed to payment</Button> : null}
      {dialogOpen ? (
        <PaymentDialog isOpen={dialogOpen} close={() => setDialogOpen(false)} />
      ) : null}
    </>
  );
};
