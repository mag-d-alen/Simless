import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCheckoutStep,
  setUserInvoiceInfo,
  setUserPaymentInfo,
} from "../../redux/UserInfoSlice";
import { FormMainContainer, InvoiceTitle } from "./form.styled";
import { InvoiceForm } from "./InvoiceForm";

export const UserDetails: React.FC = () => {
  const dispatch = useDispatch();
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleSubmit = (values: any) => {
    const infoValues = Object.entries(values).reduce(
      (acc, curr) =>
        curr.includes("oneForm") ? acc : { ...acc, [curr[0]]: curr[1] },
      {}
    );
    if (values.oneForm) {
      dispatch(setUserInvoiceInfo(infoValues));
      dispatch(setUserPaymentInfo(infoValues));
      dispatch(setCheckoutStep("f"));
    } else {
      if (showPaymentForm) {
        dispatch(setUserPaymentInfo(infoValues));
        dispatch(setCheckoutStep("f"));
      }
      dispatch(setUserInvoiceInfo(infoValues));
      setShowPaymentForm(true);
    }
  };
  return (
    <FormMainContainer>
      {showPaymentForm ? (
        <InvoiceTitle>Fill in the payment information details</InvoiceTitle>
      ) : (
        <InvoiceTitle>Fill in the Invoice Form</InvoiceTitle>
      )}
      <InvoiceForm oneForm={!showPaymentForm} handleSubmit={handleSubmit} />
    </FormMainContainer>
  );
};
