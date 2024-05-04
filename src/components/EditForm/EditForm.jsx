import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { selectContacts } from "../../redux/contacts/selectors";
import { editContact } from "../../redux/contacts/operations";
import css from "./EditForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

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

const EditForm = () => {
  const contactEdit = useSelector(selectContacts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const contact = contactEdit.find((contact) => contact.id === id);

  return (
    <Formik
      initialValues={{
        name: contact ? contact.name : "",
        number: contact ? contact.number : "",
        id: contact ? contact.id : "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, action) => {
        const newKontact = {
          name: values.name,
          number: values.number,
          id: values.id,
        };
        dispatch(editContact(newKontact));
        action.resetForm;
        console.log(newKontact);
        navigate("/contacts");
      }}
    >
      {({ isSubmitting }) => (
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
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button className={css.btn} type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <NavLink className={css.link} to={"/contacts"}>
            Exit
          </NavLink>
        </Form>
      )}
    </Formik>
  );
};

export default EditForm;

// export const EditForm = () => {
//   const contactEdit = useSelector(selectContacts);
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const contact = contactEdit.find((contact) => contact.id === id);

//   const [values, setValues] = useState({
//     name: contact ? contact.name : "",
//     number: contact ? contact.number : "",
//     id: contact ? contact.id : "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(editContact(values));
//     navigate("/contacts");
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.form}>
//       <input
//         placeholder="Name"
//         name="name"
//         required
//         autoFocus
//         value={values.name}
//         onChange={handleChange}
//       />

//       <input
//         placeholder="Number"
//         name="number"
//         required
//         autoFocus
//         value={values.number}
//         onChange={handleChange}
//       />
//       <button className={css.btn} type="submit">
//         Submit
//       </button>
//       <NavLink to={"/contacts"}>Exit</NavLink>
//     </form>
//   );
// };
