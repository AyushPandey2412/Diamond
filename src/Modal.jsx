// components/Modal.jsx
import React from "react";

const Modal = ({ message, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
      onClick={onClose} // Close on clicking outside modal content
    >
      <div
        className="bg-white rounded-md p-6 max-w-xs w-full text-center shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
      >
        <p className="text-gray-900 text-lg">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
