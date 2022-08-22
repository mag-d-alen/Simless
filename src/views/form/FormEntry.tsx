import { Field } from "formik";
import React from "react";
import { FormEntryContainer, InputLabel } from "./form.styled";

export const FormEntry: React.FC<{
  inputField: string;
  errors: any;
  touched: any;
}> = ({ inputField, errors, touched }) => {
  return (
    <FormEntryContainer>
      <InputLabel>
        {inputField
          .toLocaleUpperCase()
          .split("_")
          .join(" ")}
      </InputLabel>
      <Field name={inputField} type={inputField} />
      {errors[inputField] && touched[inputField] ? (
        <div>{errors[inputField]}</div>
      ) : null}
    </FormEntryContainer>
  );
};
