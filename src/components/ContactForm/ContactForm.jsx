import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
// import { addContact } from "../../redux/contactsOps";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "The name must be no more than 50 characters long")
    .required("This is a required field"),
  number: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "The name must be no more than 50 characters long")
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g
    )
    .required("This is a required field"),
});

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          id: values.id,
          name: values.name,
          number: values.number,
        };
        dispatch(addContact(newContact));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.input} name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberFieldId}
          />

          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

//  autoComplete = "off";
