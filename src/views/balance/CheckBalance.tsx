import { Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { setUserNumber } from "../../context/MainReducer";
import { Button } from "../chooseTariff/chooseTariffs.styled";
import { CheckBalanceSchema } from "../form/form data";
import { FormEntry } from "../form/FormEntry";

export const CheckBalance = () => {
  const dispatch = useDispatch();
  const checkBalance = (value: string) => {
    dispatch(setUserNumber(value));
  };
  return (
    <Formik
      initialValues={{ sim: "" }}
      validationSchema={CheckBalanceSchema}
      onSubmit={(value) => {
        checkBalance(value.sim);
      }}>
      {({ errors, touched }) => (
        <Form>
          <FormEntry inputField={"sim"} errors={errors} touched={touched} />
          <Button type="submit">Check your balance</Button>
        </Form>
      )}
    </Formik>
  );
};
