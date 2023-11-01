import React from 'react'
import { motion } from 'framer-motion'
const settings = () => {
  return (
    <>
      <motion.div
        className="w-screen h-screen flex flex-col justify-center items-center opacity-95"
      >
        <h3 className='text-2xl text-black'>Settings</h3>
        <label className="flex items-center mt-3">API Keys:</label>
        <input className=""></input>
      </motion.div>
    </>
  )
}

export default settings