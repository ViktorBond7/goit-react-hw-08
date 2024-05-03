import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCog } from "react-icons/io";

import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { NavLink } from "react-router-dom";
// import EditModal from "../ModalEdit/ModalEdit";
// import { useState } from "react";
// import { editContact } from "../../redux/contacts/operations";

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

        <NavLink to={`/editcontac/${id}`} className={css.btn}>
          <IoMdCog size="1.5em" className={css.icondel} />
        </NavLink>
      </div>
    </div>
  );
};

export default Contact;

// import { FaPhoneAlt, FaUser } from "react-icons/fa";
// import { MdDeleteForever } from "react-icons/md";
// import { IoMdCog } from "react-icons/io";
// import css from "./Contact.module.css";
// import { useDispatch } from "react-redux";
// import { deleteContact, editContact } from "../../redux/contacts/operations";
// import { useState } from "react";
// import EditModal from "../ModalEdit/ModalEdit";

// const Contact = ({ contacts: { name, number, id } }) => {
//   const [openModal, setOpenModal] = useState(false);
//   const [editeContact, setEditeContact] = useState({ name, number, id });
//   const dispatch = useDispatch();

//   const handleEdit = () => {
//     dispatch(editContact(editeContact))
//       .then(() => {
//         // Notify.success("Contact updated successfully");
//         setOpenModal(false); // Close the modal after editing
//       })
//       .catch((error) => {
//         // Notify.error("Error updating contact");
//         console.error(error);
//       });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditeContact({ ...editeContact, [name]: value });
//   };

//   const handleEditClick = () => {
//     // Set the contact details when edit button is clicked
//     setEditeContact({ name, number, id });
//     setOpenModal(true);
//   };
//   // console.log(EditModal);
//   return (
//     <div className={css.container}>
//       <div>
//         <p className={css.page}>
//           <FaUser className={css.icon} />
//           {name}
//         </p>
//         <p className={css.page}>
//           <FaPhoneAlt className={css.icon} />
//           {number}
//         </p>
//       </div>
//       <div className={css.containerbutton}>
//         <button
//           className={css.btn}
//           type="button"
//           onClick={() => dispatch(deleteContact(id))}
//         >
//           <MdDeleteForever size="1.5em" className={css.iconcorecta} />
//         </button>
//         <button
//           type="button"
//           onClick={handleEditClick} // Call handleEditClick to initialize editeContact
//           className={css.btn}
//         >
//           <IoMdCog size="1.5em" className={css.icondel} />
//         </button>
//       </div>
//       <EditModal
//         isOpen={openModal}
//         closeModal={() => setOpenModal(false)}
//         contact={editeContact}
//         handleChange={handleChange}
//         onSubmit={handleEdit}
//       />
//     </div>
//   );
// };

// export default Contact;
