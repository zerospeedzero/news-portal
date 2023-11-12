import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const Sources = ({sources}) => {
  const LOGIN_COOKIE_KEY = "login_attempts";
  const [isLoading, setIsLoading] = React.useState(true)
  const router = useRouter();
  useEffect(() => {
    if (Cookies.get(LOGIN_COOKIE_KEY) !== "true") {
      router.push("/login"); 
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 300) 
  }, []);  
  return (
    <motion.div
      className='w-full h-full flex flex-col justify-start items-center opacity-95'
    >
      <div className='h-16'></div>
        <h2 className='text-3xl font-semibold text-blue-900  p-4 text-center opacity-90 capitalize'>Sources</h2>
        <motion.div
        className="mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-8 md:grid-cols-2 md:pt-10 lg:grid-cols-3 xl:grid-cols-4 sxl:grid-cols-5"
        >
          {sources.sources.map((source) => (
            // <Link href={source.url}>
            <Link href={`/source/${source.id}` }>
              <motion.div
                className='h-full bg-s1 text-p2 px-2 py-2 m-4 rounded-lg shadow-lg flex flex-col justify-center items-center cursor-pointer'
                // whileHover={{scale: 1.1}}
                whileHover={{scale: 1.05, color: '#000000', backgroundColor: '#DCE8EA', shadow: '0px 0px 20px 0px rgba(0,0,0,0.75)'}}
                transition={{type: 'spring', bounce: 0.4, duration: 0.8}}
              >
                <motion.h3 className='text-xl font-semibold  mb-3'>{source.name}</motion.h3>
                <motion.p className='text-sm  p-1'>{source.description}</motion.p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
    </motion.div>
  )
}

export default Sources