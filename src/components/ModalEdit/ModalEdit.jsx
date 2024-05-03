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

// Call this function outside of the component
Modal.setAppElement("#root");

const EditModal = ({
  contact,
  onRequestClose,
  handleNameChange,
  handleNumberChange,
  onSubmit,
  modalIsOpen,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    onRequestClose();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen} // Changed modalIsOpen to isOpen
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Edit contact Modal"
      >
        <form onSubmit={handleSubmit}>
          <input value={contact.name} onChange={handleNameChange} />
          <input value={contact.number} onChange={handleNumberChange} />
          <button type="submit">Save</button>
          <button type="button" onClick={onRequestClose}>
            Exit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditModal;
