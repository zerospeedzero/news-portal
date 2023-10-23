import React from 'react'
import {motion} from 'framer-motion'

const test = () => {
  const [color, setColor] = React.useState('orange')
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
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
    <div className='w-screen h-screen'>
      <motion.svg
        className="mt-10"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial="hidden"
        animate="visible"
      >
        <motion.ellipse
          className="stroke-[5px] fill-transparent"
          cx="100"
          cy="100"
          rx="20"
          ry="50"
          stroke={`${color}`}
          variants={draw}
          custom={1}
        />
        <motion.ellipse
          className="stroke-[5px] fill-transparent"
          cx="100"
          cy="100"
          rx="60"
          ry="50"
          stroke="#0099ff"
          variants={draw}
          custom={2}
        />
        <motion.ellipse
          className="stroke-[5px] fill-transparent"
          cx="100"
          cy="100"
          rx="40"
          ry="50"
          stroke="#0099ff"
          variants={draw}
          custom={3}
        />
      </motion.svg>
      <div className='p-2'>
        <p>hello</p>
        <button onClick={() => {setColor('red');console.log(color)}}>red</button>
        <button onClick={() => setColor('blue')}>blue</button>
        <button onClick={() => setColor('green')}>green</button>
        <button onClick={() => setColor('orange')}>orange</button> 
      </div>
    </div>
    )
}

export default test