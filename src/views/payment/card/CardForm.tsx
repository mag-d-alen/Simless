import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { CardPaymentSchema } from "../../form/form data";
import { FormEntry } from "../../form/FormEntry";
import { Button } from "../../general.styled";
import { CardImageContainer } from "./card.styled";
import { useSelector } from "react-redux";
import { Card } from "./Card";

export const CardForm: React.FC<{
  handleMakePayment: ({ card_Number, expiry_Date, cvv }) => void;
}> = ({ handleMakePayment }) => {
  const [flipped, setFlipped] = useState(false);
  const { first_Name, last_Name } = useSelector((s: any) => s.topUp).payment;
  return (
    <Formik
      initialValues={{
        card_Number: "0000000000000000",
        expiry_Date: "MMYY",
        cvv: "000",
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
            cvv={values.cvv}
            flipped={flipped}
          />

          <Form
            onFocus={(e) => {
              setFlipped(e.target.name === "cvv");
            }}>
            <FormEntry
              inputfield={"card_Number"}
              errors={errors}
              touched={touched}></FormEntry>
            <FormEntry
              inputfield={"expiry_Date"}
              errors={errors}
              touched={touched}></FormEntry>
            <FormEntry
              inputfield={"cvv"}
              errors={errors}
              touched={touched}></FormEntry>
            <Button type={"submit"}>Pay</Button>
          </Form>
        </CardImageContainer>
      )}
    </Formik>
  );
};
