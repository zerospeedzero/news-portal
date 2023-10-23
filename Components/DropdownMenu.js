import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = ['Business', 'Technology', 'Science', 'Sports', 'Health', 'General', 'Entertainment'
]
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleMenu}
          type="button"
          className="text-white focus:outline-none font-semibold"
        >
          Categories
        </button>
      </div>
      {isOpen && (
        <motion.div 
          className="origin-top-right absolute left-0 mt-5 w-40 rounded-b-lg shadow-lg bg-gradient-to-tr from-blue-900 to-cyan-600  ring-1 ring-black ring-opacity-5"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8}}
        >
          <div className="py-2">
            {menu.map((item, index) => (
              <Link href={`/categories/${item.toLowerCase()}`} key={index} className="block px-4 py-2 text-sm  text-white  hover:bg-gray-100 hover:text-blue-600 "
                onClick={() => setIsOpen(false)}
              >
                <motion.span
                  className="block px-4 py-2 text-md font-semibold "
                  initial={{x: 40 + index}}
                  animate={{x: 0}}
                  transition={{delay: 0.2 + (index/20), duration: 0.8, loop: Infinity}}
                >
                  {item}
                </motion.span>
              </Link>
              )
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DropdownMenu;