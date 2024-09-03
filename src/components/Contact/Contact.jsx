import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCog } from "react-icons/io";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { NavLink } from "react-router-dom";
import DeleteContact from "../ModalDelete/ModalDelete";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = ({ contacts: { name, number, id } }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handelDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Success message", "Title here");
      })
      .catch(() => {
        toast.error("This didn't work.");
      });
  };

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
          onClick={() => setIsOpen(true)}
        >
          <MdDeleteForever size="1.5em" className={css.iconcorecta} />
        </button>

        <NavLink to={`/editcontac/${id}`} className={css.btn}>
          <IoMdCog size="1.5em" className={css.icondel} />
        </NavLink>
        <DeleteContact
          isOpen={modalIsOpen}
          deleteContact={handelDelete}
          closeModal={() => setIsOpen(false)}
        />
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Contact;

