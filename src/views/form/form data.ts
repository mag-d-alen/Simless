import * as Yup from "yup";
export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const amountRegExp = /^[0-9]*$/;

export const initialData = {
  first_Name: "",
  last_Name: "",
  email: "",
  sim: "",
  oneForm: true,
};
export const SignupSchema = Yup.object().shape({
  first_Name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too Long")
    .required("Required"),
  last_Name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too Long")
    .required("Required"),
  email: Yup.string()
    .email("Enter correct email")
    .required("Required"),
  sim: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(8, "Enter correct phone number")
    .max(8, "Enter correct phone number")
    .required("Required"),
  oneForm: Yup.boolean(),
});

export const CheckBalanceSchema = Yup.object().shape({
  sim: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(8, "Enter correct phone number")
    .required("Required"),
});
export const TopUpSchema = Yup.object().shape({
  sim: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(8, "Enter correct phone number")
    .required("Required"),
  amount: Yup.string()
    .matches(amountRegExp, "insert a value amount")
    .required("Required"),
});

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too Long")
    .required("Required"),
  email: Yup.string()
    .email("Enter correct email")
    .required("Required"),
  message: Yup.string()
    .min(10, "Message is too short")
    .required("Required"),
});
