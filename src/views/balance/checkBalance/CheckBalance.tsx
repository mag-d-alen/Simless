import { Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { setUserSimNumber } from "../../../redux/UserInfoSlice";
import { Button } from "../../chooseTariff/chooseTariffs.styled";
import { CheckBalanceSchema } from "../../form/form data";
import { FormEntry } from "../../form/FormEntry";

export const CheckBalance = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ sim: "" }}
      validationSchema={CheckBalanceSchema}
      onSubmit={(values) => {
        dispatch(setUserSimNumber(values.sim));
      }}>
      {({ errors, touched }) => (
        <Form>
          <FormEntry inputField="sim" errors={errors} touched={touched} />
          <Button type="submit">Check your balance</Button>
        </Form>
      )}
    </Formik>
  );
};
