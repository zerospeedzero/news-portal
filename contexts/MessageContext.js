// contexts/MessageContext.js
import MessageBox from "@/Components/MessageBox";
import { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export const useMessage = () => {
  return useContext(MessageContext);
};

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const displayMessage = (text) => {
    setMessage(text);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // Automatically close after 5 seconds
  };

  return (
    <MessageContext.Provider value={displayMessage}>
      {children}
      {showMessage && (
        <MessageBox message={message} onClose={() => setShowMessage(false)}/>
      )}
    </MessageContext.Provider>
  );
};
