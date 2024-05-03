import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { selectContacts } from "../../redux/contacts/selectors";
import { editContact } from "../../redux/contacts/operations";
import css from "./EditForm.module.css";

export const EditForm = () => {
  const contactEdit = useSelector(selectContacts);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const contact = contactEdit.find((contact) => contact.id === id);

  const [values, setValues] = useState({
    name: contact ? contact.name : "",
    number: contact ? contact.number : "",
    id: contact ? contact.id : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editContact(values));
    navigate("/contacts");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        placeholder="Name"
        name="name"
        required
        autoFocus
        value={values.name}
        onChange={handleChange}
      />

      <input
        placeholder="Number"
        name="number"
        required
        autoFocus
        value={values.number}
        onChange={handleChange}
      />
      <button className={css.btn} type="submit">
        Submit
      </button>
      <NavLink to={"/contacts"}>Exit</NavLink>
    </form>
  );
};

// import { useId } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const userSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, "Name must be at least 3 symb long")
//     .max(50, "The name must be no more than 50 characters long")
//     .required("This is a required field"),
//   number: Yup.string()
//     .min(3, "Name must be at least 3 symb long")
//     .max(50, "The name must be no more than 50 characters long")
//     .matches(
//       /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g
//     )
//     .required("This is a required field"),
// });

// export const EditForm = () => {
//   const nameFieldId = useId();
//   const numberFieldId = useId();
//   const dispatch = useDispatch();

//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         number: "",
//       }}
//       validationSchema={userSchema}
//       onSubmit={(values, actions) => {
//         const newContact = {
//           id: values.id,
//           name: values.name,
//           number: values.number,
//         };
//         dispatch(editContact(newContact));
//         actions.resetForm();
//       }}
//     >
//       <Form className={css.form}>
//         <div className={css.formGroup}>
//           <label htmlFor={nameFieldId}>Name</label>
//           <Field className={css.input} name="name" id={nameFieldId} />
//           <ErrorMessage className={css.error} name="name" component="span" />
//         </div>

//         <div className={css.formGroup}>
//           <label htmlFor={numberFieldId}>Number</label>
//           <Field
//             className={css.input}
//             type="text"
//             name="number"
//             id={numberFieldId}
//           />

//           <ErrorMessage className={css.error} name="number" component="span" />
//         </div>

//         <button className={css.btn} type="submit">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// import { Formik, Form, Field, ErrorMessage } from "formik";

// export const EditForm = () => {
//   const contactEdit = useSelector(selectContacts);
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   const contact = contactEdit.find((contact) => contact.id === id);

//   const handleSubmit = (values) => {
//     dispatch(editContact(values));
//   };

//   return (
//     <Formik
//       initialValues={{
//         name: contact ? contact.name : "",
//         number: contact ? contact.number : "",
//         id: contact ? contact.id : "",
//       }}
//       validate={() => {
//         const errors = {};
//         // Add validation logic if needed
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         handleSubmit(values);
//         setSubmitting(false);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <Field type="text" name="name" placeholder="Name" />
//           <ErrorMessage name="name" component="div" />

//           <Field type="text" name="number" placeholder="Number" />
//           <ErrorMessage name="number" component="div" />

//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };
