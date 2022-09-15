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
import Select from "react-select";
import { countriesList } from "../../data/data";

export const FormEntry: React.FC<{
  inputField: string;
  errors: any;
  touched: any;
  values?: any;
  setValues?: any;
}> = ({ inputField, errors, touched, values, setValues }) => {
  return (
    <FormEntryContainer>
      <InputContainer>
        <InputLabel>{splitAndCapitalize(inputField)}</InputLabel>
        <FormFieldContainer>
          {inputField === "sim" || inputField === "country" ? (
            inputField === "sim" ? (
              <PhoneContainer>
                +372 <FormField name={inputField} type={inputField} />{" "}
              </PhoneContainer>
            ) : (
              <Select
                name={inputField}
                options={countriesList}
                onChange={(selected) => {
                  setValues({ ...values, country: selected.label });
                }}
              />
            )
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
