import React from "react";
import { Formik, Form, Field } from "formik";
import { FormEntry } from "./FormEntry";
import { initialData, SignupSchema } from "./form data";
import { Button } from "../chooseTariff/chooseTariffs.styled";



export const UserForm = () => (
  <div>
    <h1>Fill your data</h1>
    <Formik
      initialValues={initialData}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {({ errors, touched }) => (
        <Form>
          <FormEntry
            inputField={"first_Name"}
            errors={errors}
            touched={touched}
          />
          <FormEntry
            inputField={"last_Name"}
            errors={errors}
            touched={touched}
          />
          <FormEntry inputField={"email"} errors={errors} touched={touched} />
          <FormEntry inputField={"sim"} errors={errors} touched={touched} />

          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);
