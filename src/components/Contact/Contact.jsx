import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contacts: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div>
        <p className={css.page}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.page}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        <MdDeleteForever />
      </button>
    </div>
  );
};

export default Contact;
