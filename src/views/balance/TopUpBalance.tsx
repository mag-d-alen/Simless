import { Formik, Form } from "formik";
import React from "react";
import { setUserNumber } from "../../context/MainReducer";
import { Button } from "../chooseTariff/chooseTariffs.styled";
import { CheckBalanceSchema } from "../form/form data";
import { FormEntry } from "../form/FormEntry";
import { useDispatch } from "react-redux";
import { ChooseAmount } from "./toggle/ChooseAmount";

export const TopUpBalance = () => {
  const dispatch = useDispatch();
  const checkBalance = (value: string) => {
    dispatch(setUserNumber(value));
  };
  return (
    <>
      {" "}
      <Formik
        initialValues={{ phone: "+372" }}
        validationSchema={CheckBalanceSchema}
        onSubmit={(value) => {
          // topUpBalance(value.phone);
        }}>
        {({ errors, touched }) => (
          <Form>
            <FormEntry inputField={"phone"} errors={errors} touched={touched} />{" "}
            <FormEntry inputField={"phone"} errors={errors} touched={touched} />{" "}
            <Button type="submit">Top Up your balance</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
