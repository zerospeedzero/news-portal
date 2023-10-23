import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const MessageBox = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 text-center p-4 bg-black opacity-60 text-white flex flex-col justify-center items-center">
      <p>{message}</p>
      <button onClick={onClose} className="absolute top-2 right-2 bg-white text-blue-500 p-2 rounded mt-2">
        Close
      </button>
    </div>
  );
};

export default MessageBox;
