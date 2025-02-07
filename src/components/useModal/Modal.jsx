import React from "react";
import UseModal from "./UseModal";
import App2 from "./App2";

const Modal = () => {
  const { isOpen, modalData, openModal, closeModal } = UseModal();
  return (
    <div>
      <h1>Modal</h1>
      <div>
        <button onClick={() => openModal("Hello from Modal!")}>
          Open Modal
        </button>
        <App2 isOpen={isOpen} closeModal={closeModal} modalData={modalData} />
      </div>
    </div>
  );
};

export default Modal;
