import axios from "axios";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import { url } from "../../data/data";
import { splitAndCapitalize } from "../../data/splitAndCapitalize";
import { ContactSchema } from "../form/form data";
import { FormTextArea } from "../form/form.styled";
import { FormEntry } from "../form/FormEntry";
import { Button } from "../general.styled";
import { ContactMainContainer } from "./contact.styled";

export const Contact = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    try {
      const response = await axios.post(`${url}/contact`, {
        params: data,
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
            <FormTextArea
              inputField={"message"}
              errors={errors}
              touched={touched}
            />
            <Button type="submit">{splitAndCapitalize(status)}</Button>
          </Form>
        )}
      </Formik>
      {/* <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit">{status}</button>
      </form> */}
    </ContactMainContainer>
  );
};
