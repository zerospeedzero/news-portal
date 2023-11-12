import React from 'react'
import {motion} from 'framer-motion'
const Logo = ({input}) => {
  const [color, setColor] = React.useState(input)
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 2 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0.2 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  }   
  return (
    <>
      <motion.div className='relative'>
        <motion.svg
          className="w-[150px] h-[150px] m-2 mx-auto"
          initial="hidden"
          animate="visible"
          >
          <motion.ellipse
            className="stroke-[6px] fill-transparent"
            cx="75"
            cy="75"
            rx="20"
            ry="50"
            stroke={`${color}`}
            variants={draw}
            custom={1}
          />
          <motion.ellipse
            className="stroke-[6px] fill-transparent"
            cx="75"
            cy="75"
            rx="60"
            ry="50"
            stroke={`${color}`}
            variants={draw}
            custom={2}
          />
          <motion.ellipse
            className="stroke-[6px] fill-transparent"
            cx="75"
            cy="75"
            rx="42"
            ry="50"
            stroke={`${color}`}
            variants={draw}
            custom={3}
          />
        </motion.svg>
        <div className='absolute w-full top-[37%] flex flex-row justify-center items-center'>
          <motion.span
            className={`px-[0.7rem] text-4xl rounded-xl  font-bold text-white bg-${color}`}
            initial={{scale: 8, opacity: 0, rotate: 0}}
            animate={{scale: 1, opacity: 1, rotate: 360}}
            transition={{delay: 5.5, duration: 1, ease: 'easeInOut'}}
          >
            NEWS  
          </motion.span>
        </div>
      </motion.div>
    </>
  )
}

export default Logo