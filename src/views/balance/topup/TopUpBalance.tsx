import { Formik, Form } from "formik";
import React from "react";
import { Button } from "../../chooseTariff/chooseTariffs.styled";
import { TopUpSchema } from "../../form/form data";
import { FormEntry } from "../../form/FormEntry";
import { useDispatch } from "react-redux";
import {
  setUserSimNumber,
  setCheckoutStep,
} from "../../../redux/UserInfoSlice";

export const TopUpBalance: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ sim: "", amount: "" }}
      validationSchema={TopUpSchema}
      onSubmit={(values) => {
        dispatch(setUserSimNumber(values.sim));
        dispatch(setCheckoutStep("f"));
      }}>
      {({ errors, touched }) => (
        <Form>
          <FormEntry inputField="sim" errors={errors} touched={touched} />
          <FormEntry inputField="amount" errors={errors} touched={touched} />
          <Button type="submit">Go to Invoice</Button>
        </Form>
      )}
    </Formik>
  );
};
