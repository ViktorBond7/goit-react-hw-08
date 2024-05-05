import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  return (
    <div>
      <ContactForm />
      {visibleContacts.length > 0 && <SearchBox />}
      <ul className={css.list}>
        {visibleContacts.length > 0 ? (
          visibleContacts.map((item) => (
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
