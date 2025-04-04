import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid/non-secure";
import * as Yup from "yup";

const formValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Ім'я закоротке")
    .max(50, "Ім'я задовге")
    .required("Поле обовязкове до заповнення"),
  number: Yup.string()
    .min(7, "Номер закороткий")
    .max(10, "Номер задовгий")
    .required("Поле обовязкове до заповнення"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formValidation}
      >
        <Form className={css.form}>
          <div className={css.labelWrapper}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </div>

          <div className={css.labelWrapper}>
            <label htmlFor={numberId}>Number</label>
            <Field type="phone" name="number" id={numberId} />
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="span"
            />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
