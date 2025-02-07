import React from "react";

const App2 = ({ isOpen, closeModal, modalData }) => {
  if (!isOpen) return null;
  return (
    <div>
      <div>
        <p>{modalData}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default App2;
