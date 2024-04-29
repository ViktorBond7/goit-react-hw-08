import { lazy, useEffect } from "react";
import "./App.css";
// import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";

// import ContactList from "./components/ContactList/ContactList";
// import ContactForm from "./components/ContactForm/ContactForm";
// import { fetchContacts } from "./redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
// import HomePage from "../src/pages/HomePage";
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../src/pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../src/pages/ContactsPage/ContactsPage")
);
// import { selectIsRefreshing } from "../src/redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import Layout from "../src/components/Layout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { selectIsRefreshing } from "./redux/auth/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
};

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       <ContactList />
//     </div>
//   );
// }

export default App;
