import React from "react";
import { FieldHookConfig, useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { ErrorAlert } from "./form.styled";

export const FormDatePicker = (props: FieldHookConfig<any>) => {
  const [field, meta] = useField(props);
  return (
    <>
      <DatePicker  {...props} />
      {meta.touched && meta.error ? (
        <ErrorAlert>{meta.error}</ErrorAlert>
      ) : null}
    </>
  );
};
