import * as Yup from "yup";
export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const initialData = {
  first_Name: "",
  last_Name: "",
  email: "",
  sim: "",
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
       }); 

export const CheckBalanceSchema = Yup.object().shape({
  sim: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(8, "Enter correct phone number")
    .required("Required"),

});

