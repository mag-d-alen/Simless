import { Formik, Field, Form } from "formik";
import React from "react";
import { initialData, InvoiceSchema } from "./form data";
import { InputLabel } from "./form.styled";
import { FormEntry } from "./FormEntry";
import { Button } from "../general.styled";
import { InvoiceType } from "../../data/types";

export const InvoiceForm: React.FC<{
  handleSubmit: (values: InvoiceType) => void;
  oneForm: boolean;
}> = ({ handleSubmit, oneForm }) => {
  return (
    <>
      <Formik
        initialValues={initialData}
        validationSchema={InvoiceSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}>
        {({ errors, touched, values, setValues }) => (
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
            <FormEntry
              inputField={"company"}
              errors={errors}
              touched={touched}
            />
            <FormEntry inputField={"email"} errors={errors} touched={touched} />
            <FormEntry inputField={"sim"} errors={errors} touched={touched} />
            <FormEntry
              inputField={"street"}
              errors={errors}
              touched={touched}
            />
            <FormEntry inputField={"phone"} errors={errors} touched={touched} />
            <FormEntry
              inputField={"additional_Phone"}
              errors={errors}
              touched={touched}
            />
            <FormEntry inputField={"city"} errors={errors} touched={touched} />

            <FormEntry
              inputField={"country"}
              errors={errors}
              touched={touched}
              values={values}
              setValues={setValues}
            />

            {oneForm ? (
              <InputLabel>
                <Field type="checkbox" name="oneForm" inputField={"oneForm"} />
                Use the same address for payment
              </InputLabel>
            ) : null}
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
