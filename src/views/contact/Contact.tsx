import axios from "axios";
import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import { url } from "../../data/data";
import { splitAndCapitalize } from "../../data/splitAndCapitalize";
import { ContactSchema } from "../form/form data";
import { ErrorAlert } from "../form/form.styled";
import { FormEntry } from "../form/FormEntry";
import { FormTextArea } from "../form/FormTextArea";
import { Button } from "../general.styled";
import { ContactMainContainer } from "./contact.styled";

export const Contact = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    setStatus("Sending...");

    try {
      console.log(values);
      const response = await axios.post(`${url}/contact`, {
        params: values,
      });

      setStatus("Submit");
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContactMainContainer>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}>
        {({ errors, touched }) => (
          <Form>
            <FormEntry inputField={"name"} errors={errors} touched={touched} />
            <FormEntry inputField={"email"} errors={errors} touched={touched} />
            <FormTextArea name={"message"} />
            <Button type="submit">{splitAndCapitalize(status)}</Button>
          </Form>
        )}
      </Formik>
    </ContactMainContainer>
  );
};
