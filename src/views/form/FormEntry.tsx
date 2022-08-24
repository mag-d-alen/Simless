import { Field } from "formik";
import React from "react";
import { splitAndCapitalize } from "../../data/splitAndCapitalize";
import {
  ErrorAlert,
  FormEntryContainer,
  FormFieldContainer,
  InputContainer,
  InputLabel,
  PhoneContainer,
} from "./form.styled";
import { FormField } from "./FormField";

export const FormEntry: React.FC<{
  inputField: string;
  errors: any;
  touched: any;
}> = ({ inputField, errors, touched }) => {
  return (
    <FormEntryContainer>
      <InputContainer>
        <InputLabel>{splitAndCapitalize(inputField)}</InputLabel>
        <FormFieldContainer>
          {inputField === "sim" ? (
            <PhoneContainer>
              +372 <FormField name={inputField} type={inputField} />{" "}
            </PhoneContainer>
          ) : (
            <FormField name={inputField} type={inputField} />
          )}
          {errors[inputField] && touched[inputField] ? (
            <ErrorAlert>{errors[inputField]}</ErrorAlert>
          ) : null}
        </FormFieldContainer>
      </InputContainer>
    </FormEntryContainer>
  );
};
