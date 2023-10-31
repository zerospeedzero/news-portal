import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const MessageBox = ({ message, search }) => {
  const [inputText, setInputText] = useState('')
  const handleKeyPress = (e) => {
    e.preventDefault();
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      search(inputValue)
      // setInputValue(''); // Clear the input field
    }    
  }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 text-center p-4 bg-black opacity-30 text-white flex flex-col justify-center items-center">
      <form>
        <p>{message}</p>
        <h3 className="text-3xl bg-black text-white text-start m-4">Searching by keyword(s)</h3>
        <input className="text-2xl text-black m-4 p-2 w-full" type="text" placeholder="Search.." name="search" value={inputText} onChange={e => setInputText(e.target.value)} onSubmit={(e) => {handleKeyPress(e)}}/>
      </form>
    </div>
  );
};

export default MessageBox;
