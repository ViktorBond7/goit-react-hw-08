import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCog } from "react-icons/io";

import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Link, NavLink } from "react-router-dom";

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
      <div className={css.containerbutton}>
        <button
          className={css.btn}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          <MdDeleteForever size="1.5em" className={css.iconcorecta} />
        </button>

        <NavLink to="/editcontac" className={css.btn}>
          <IoMdCog size="1.5em" className={css.icondel} />
        </NavLink>

        {/* <button
          className={css.btn}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          <IoMdCog size="1.5em" className={css.icondel} />
        </button> */}
      </div>
    </div>
  );
};

export default Contact;
