import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().min(5, "Titulo muy corto").required("Es requerido"),
  description: Yup.string()
    .min(5, "Titulo muy corto")
    .required("Es requerido una descripcion"),
  hora: Yup.number().required("Es necesaria la hora a realizar la tarea"),
});

const TaskFormik = () => {
  const initialValues = {
    title: "",
    description: "",
    hora: 0,
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("credentials", values);
        }}
      >
        {({ touched, errors, isSubmitting }) => {
          return (
            <Form>
              <label htmlFor="title">Titulo</label>
              <Field
                id="title"
                type="text"
                name="title"
                placeholder="Your title"
              ></Field>

              {errors.title && touched.title && (
                <ErrorMessage name="title" component="div" />
              )}

              <label htmlFor="decription">Descripcion</label>
              <Field
                id="decription"
                type="text"
                name="decription"
                placeholder="Your description"
              ></Field>

              {errors.description && touched.description && (
                <ErrorMessage name="description" component="div" />
              )}

              <label htmlFor="hora">Hora</label>
              <Field
                id="hora"
                type="number"
                name="hora"
                placeholder="La hora"
              ></Field>

              {errors.hora && touched.hora && (
                <ErrorMessage name="hora" component="div" />
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default TaskFormik;
