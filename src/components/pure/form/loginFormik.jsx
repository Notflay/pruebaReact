import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email es required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initalCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        // *** Initial values
        initialValues={initalCredentials}
        // *** Yup validation Schema ***
        validationSchema={loginSchema}
        // ** Onsubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("credentials", values);
        }}
      >
        {/* We obtain props from Formik */}
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;

          return (
            <Form>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
              />

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

              {errors.email && touched.email && (
                <div className="error">
                  <br />
                  <p>{errors.email}</p>
                </div>
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

export default LoginFormik;
