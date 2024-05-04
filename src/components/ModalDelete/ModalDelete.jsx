import css from "./ModalDelete.module.css";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const DeleteContact = ({ isOpen, deleteContact, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>I'm sure you want to delete?</h3>
        <div className={css.container}>
          <button className={css.btn} onClick={closeModal}>
            Close
          </button>
          <button className={css.btn} onClick={deleteContact}>
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteContact;
