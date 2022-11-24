import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//Models
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Username to short")
    .max(12, "Username too long"),
  email: Yup.string()
    .email("The format incorrect")
    .required("Email es required"),
  password: Yup.string()
    .min(8, "Password too short")
    .required("Password is incorrect"),
  role: Yup.string()
    .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: User / Admin")
    .required("Role is required"),
  confirm: Yup.string()
    .when("password", {
      is: (value) => (value && value.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "¡Password mus match!"),
    })
    .required("You must confirm to password"),
});

const RegisterFormik = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",

    role: ROLES.USER,
  };

  const submit = () => {
    return "Register user";
  };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("credentials", values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => {
          return (
            <Form>
              <label htmlFor="username">Username</label>
              <Field
                id="username"
                type="text"
                name="username"
                placeholder="Your username"
              ></Field>

              {errors.username && touched.username && (
                <ErrorMessage name="username" component="div" />
              )}

              <label htmlFor="email">Email</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
              ></Field>

              {errors.email && touched.email && (
                <ErrorMessage name="email" component="div" />
              )}

              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
              />

              {errors.password && touched.password && (
                <ErrorMessage name="password" component="div" />
              )}

              <label htmlFor="confirm">Password</label>
              <Field
                id="confirm"
                name="confirm"
                placeholder="confirm password"
                type="password"
              />

              {errors.confirm && touched.confirm && (
                <ErrorMessage name="confirm" component="div" />
              )}

              <button type="submit">Login</button>
              {isSubmitting ? <p>Login your credentials...</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
