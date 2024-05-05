import { lazy, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import Layout from "../src/components/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { selectIsRefreshing } from "./redux/auth/selectors";
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../src/pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../src/pages/ContactsPage/ContactsPage")
);

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const EditContactPage = lazy(() =>
  import("./pages/EditContactPage/EditContactPage")
);

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

        <Route
          path="/editcontac/:id"
          element={
            <PrivateRoute redirectTo="/login" component={<EditContactPage />} />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
