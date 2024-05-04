import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";

const userSchema = Yup.object().shape({
  email: Yup.string().email().required("This is a required field"),
  password: Yup.string()
    .min(4, "Name must be at least 4 symb long")
    .max(20, "The name must be no more than 20 characters long")

    .required("This is a required field"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values))
          .unwrap()
          .then(() => {
            toast.success("Successfully toasted!");
          })
          .catch(() => {
            toast.error("This didn't work.");
          });
        actions.resetForm();
      }}
    >
      <Form className={css.form} autoComplete="off">
        <label htmlFor={emailId}>Email</label>
        <Field
          className={css.label}
          name="email"
          placeholder="jane@acme.com"
          type="email"
          id={emailId}
        />
        <ErrorMessage
          className={css.errorEmail}
          name="email"
          component="span"
        />

        <label htmlFor={passwordId}>Password</label>
        <Field
          className={css.label}
          name="password"
          type="password"
          id={passwordId}
        />
        <ErrorMessage
          className={css.errorPassword}
          name="password"
          component="span"
        />

        <button className={css.button} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     )
//       .unwrap()
//       .then(() => {
//         console.log("login success");
//       })
//       .catch(() => {
//         console.log("login error");
//       });

//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button className={css.button} type="submit">
//         Log In
//       </button>
//     </form>
//   );
// };
