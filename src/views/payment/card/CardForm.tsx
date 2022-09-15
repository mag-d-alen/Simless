import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { CardPaymentSchema } from "../../form/form data";
import { FormDatePicker } from "../../form/FormDatePicker";
import { FormEntry } from "../../form/FormEntry";
import { FormTextArea } from "../../form/FormTextArea";
import { Button } from "../../general.styled";
import Cards from "react-credit-cards";
import { CardImageContainer } from "./card.styled";
import { useSelector } from "react-redux";
import { FormField } from "../../form/FormField";
import { ErrorAlert } from "../../form/form.styled";
import { Card } from "./Card";
import { valueContainerCSS } from "react-select/dist/declarations/src/components/containers";

export const CardForm: React.FC<{
  handleMakePayment: ({ card_Number, expiry_Date, cvc }) => void;
}> = ({ handleMakePayment }) => {
  const [flipped, setFlipped] = useState(false);
  const { first_Name, last_Name } = useSelector((s: any) => s.topUp).payment;
  const ref = useRef();
  return (
    <Formik
      initialValues={{
        card_Number: "0000 0000 0000 0000",
        expiry_Date: "MM/YY",
        cvc: "000",
        name: "",
      }}
      validationSchema={CardPaymentSchema}
      onSubmit={(values, { resetForm }) => {
        handleMakePayment(values);
        resetForm();
      }}>
      {({ errors, touched, values }) => (
        <CardImageContainer>
          <Card
            name={`${first_Name} ${last_Name}` || values.name}
            card_Number={values.card_Number}
            expiry_Date={values.expiry_Date}
            cvc={values.cvc}
            flipped={flipped}
          />

          <Form
            onFocus={(e) => {
              setFlipped(e.target.name === "cvc");
            }}>
            <FormEntry
              inputField={"card_Number"}
              errors={errors}
              touched={touched}></FormEntry>
            <FormEntry
              inputField={"expiry_Date"}
              errors={errors}
              touched={touched}></FormEntry>

            <FormEntry
              inputField={"cvc"}
              errors={errors}
              touched={touched}></FormEntry>
            <Button type={"submit"}>Pay</Button>
          </Form>
        </CardImageContainer>
      )}
    </Formik>
  );
};
