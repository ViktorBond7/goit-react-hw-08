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
      <SearchBox />
      <ul className={css.list}>
        {error && (
          <p>Oops, there was an error, please try reloading!!! {error}</p>
        )}
        {visibleContacts.map((item) => (
          <li className={css.contact} key={item.id}>
            <Contact contacts={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
