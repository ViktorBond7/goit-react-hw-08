import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import DocumentTitle from "../../components/DocumentTitle";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import ContactList from "../../components/ContactList/ContactList";

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <DocumentTitle>Your tasks</DocumentTitle> */}
      {/* <TaskEditor /> */}
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}
