import React from 'react'
import { motion } from 'framer-motion'
const denyaccess = () => {
  return (
    <>
      <motion.div
        className='flex flex-rol justify-center items-center min-h-screen'
      >
        <p>Deny to access to website due to many attempts to login with failure!</p>
      </motion.div>
    </>
  )
}

export default denyaccess