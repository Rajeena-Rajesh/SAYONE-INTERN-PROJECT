import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import KErrorMessage from "../Components/KErrorMessage";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "too Short!")
    .max(50, "Too Long")
    .required("Name is required"),
  phone: yup
    .number()
    .min(1000000000, "Not Valid Phone Number!")
    .max(9999999999, "Not a valid Phone Number!")
    .required("Phone number is required"),
  email: yup
    .string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid Email"
    )
    .required("Email is Requied!"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Password is required!"),
});

function RegisterPage() {
  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: "", phone: "", password: "", email: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="">Name: </label>
          <Field name="name" type="text" />

          <KErrorMessage name="name" />
          <br />
          <br />

          <label htmlFor="">Phone:</label>
          <Field name="phone" type="number" />
          <br />
          <br />
          <KErrorMessage name="phone" />
          <br />
          <br />
          <label htmlFor="">password</label>
          <Field name="password" type="password" />
          <br />
          <br />
          <KErrorMessage name="password" />
          <br />
          <br />

          <label htmlFor="">Email</label>
          <Field name="email" type="email" />
          <br />
          <br />
          <KErrorMessage name="email" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterPage;
