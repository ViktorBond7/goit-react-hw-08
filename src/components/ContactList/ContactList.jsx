import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";

const ContactList = () => {
  const visibleFilteredContacts = useSelector(selectFilteredContacts);
  const visibleContacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  return (
    <div>
      <ContactForm />
      {visibleContacts.length > 0 && <SearchBox />}
      <ul className={css.list}>
        {visibleFilteredContacts.length > 0 || visibleContacts.length ? (
          visibleFilteredContacts.map((item) => (
            <li className={css.contact} key={item.id}>
              <Contact contacts={item} />
            </li>
          ))
        ) : (
          <h1 className={css.title}>Create your first contact😉</h1>
        )}
      </ul>
      {error && (
        <p>Oops, there was an error, please try reloading!!! {error}</p>
      )}
    </div>
  );
};

export default ContactList;
