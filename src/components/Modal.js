import React from 'react';
import './Modal.css'; // Ensure you import the CSS file

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
