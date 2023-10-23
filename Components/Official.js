import React from 'react';
import {motion} from 'framer-motion'; 
const Official = ({url, showURL}) => {
  return (
    <motion.div className="w-screen h-screen fixed top-0 bottom-0 left-0 right-0 inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50"
    >
      <div className="relative w-screen h-screen">
        <button
          className="bg-blue-500 text-white px-4 py-2 absolute top-4 left-4 rounded-md"
          onClick={() => {console.log('here');showURL(false)}}
        >
          Back to News Portal
        </button>
        <iframe
          src={url}
          title="Google"
          className="w-full h-full"
        />
      </div>
    </motion.div>
  );
};

export default Official;
