import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = ['Business', 'Technology', 'Science', 'Sports', 'Health', 'Entertainment'
]
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <motion.button
        onMouseOver={()=>setIsOpen(true)}
        onMouseLeave={()=>setIsOpen(false)}
        type="button"
        className="text-white text-xl py-[1.6rem] focus:outline-none font-semibold hover:text-orange-400"
        whileHover={{scale: 1.1}}
        transition={{type: 'spring', bounce: 0.4, duration: 0.8}}
      >
        Topics
      </motion.button>
      {isOpen && (
        <motion.div 
          className="origin-top-right absolute left-0 w-40 rounded-b-lg shadow-lg bg-gradient-to-bl to-blue-900 from-cyan-600  ring-1 ring-black ring-opacity-5"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8}}
          onMouseOver={()=>setIsOpen(true)}
          onMouseLeave={()=>setIsOpen(false)}
        >
          <div className="py-2">
            <Link
              href="/"
            >
              <motion.span
                className="block px-8 py-2 mb-2 text-sm font-semibold border-gray-400 hover:bg-gray-100 hover:text-orange-400"
                initial={{x: 39}}
                animate={{x: 0}}
                transition={{delay: 0.2, duration: 0.8, loop: Infinity}}
                onClick={() => setIsOpen(false)}
              >
                Headlines
              </motion.span>
            </Link>
            <div className='border-b-2 opacity-25 '></div>
            {menu.map((item, index) => (
              <Link href={`/categories/${item.toLowerCase()}`} key={index} className="block px-4 py-2 text-sm  text-white  hover:bg-gray-100 hover:text-orange-400 "
                onClick={() => setIsOpen(false)}
              >
                <motion.span
                  className="block px-4 py-2 text-sm font-semibold "
                  initial={{x: 40 + index}}
                  animate={{x: 0}}
                  transition={{delay: 0.2 + (index/20), duration: 0.8, loop: Infinity}}
                >
                  {item}
                </motion.span>
              </Link>
              )
            )}
             <div className='border-b-2 opacity-25 '></div>
            <Link
              href="/sources"
            >
              <motion.span
                className="block px-8 py-2 mt-2 text-sm font-semibold border-gray-400 hover:bg-gray-100 hover:text-orange-400"
                initial={{x: 46}}
                animate={{x: 0}}
                transition={{delay: 0.5, duration: 0.8, loop: Infinity}}
                onClick={() => setIsOpen(false)}
              >
                Publishers  
              </motion.span>
            </Link>            

          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DropdownMenu;