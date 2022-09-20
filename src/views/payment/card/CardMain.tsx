import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMakeCardPaymentMutation } from "../../../redux/api/paymentApi";
import { useTopUpSimMutation } from "../../../redux/api/simApi";
import { store } from "../../../redux/store";
import {
  setCheckoutStep,
  setOrderId,
  setPaymentSuccess,
} from "../../../redux/TopUpSlice";
import { CardMainContainer } from "./card.styled";
import { CardForm } from "./CardForm";

export const CardMain = () => {
  const { topUpSimNumber, topUpAmount, orderId, payment } = useSelector(
    (s: any) => s.topUp
  );
  const [makePayment] = useMakeCardPaymentMutation();
  const dispatch = useDispatch();
  const [topUpSim] = useTopUpSimMutation();

  const handleMakePayment = ({ expiry_Date, card_Number, cvv }) => {
    makePayment({
      name: `${payment.first_Name} ${payment.last_Name}`,
      amount: topUpAmount,
      cardNumber: card_Number,
      expiry_Date: expiry_Date,
      cvv: cvv,
    })
      .unwrap()
      .then((fulfilled) => {
        topUpSim({
          num: topUpSimNumber,
          amount: topUpAmount,
          orderId: orderId,
        });
      })
      .catch((rejected) => {
        console.error(rejected);
      });

    //  makePayment.requestStatus === 200
    //      ? dispatch(setPaymentSuccess(true))
    console.log(store);
    dispatch(setPaymentSuccess(false));
    dispatch(setCheckoutStep(4));
    dispatch(setOrderId(1));
  };
  return (
    <CardMainContainer>
      <CardForm handleMakePayment={handleMakePayment} />
    </CardMainContainer>
  );
};
