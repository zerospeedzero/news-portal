import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ImExit } from 'react-icons/im';
import { useRouter } from 'next/router';
import Logo from '@/Components/Logo'
import DropdownMenu from './DropdownMenu';

const Header = () => {
  const LOGIN_COOKIE_KEY = "login_attempts";
  const router = useRouter();
  return (
    <>
      {router.pathname != '/login' ? (
        <motion.div
          className='fixed top-0 left-0 w-full h-16 bg-gradient-to-br from-blue-900 to-cyan-600 text-p1 p-4 z-50 flex flex-row justify-between items-center shadow-lg'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1.5}}
          >
          <div className='flex flex-row justify-start items-center'>
            <Link href='/'>
              <motion.h1 className='text-2xl font-bold cursor-pointer mr-8'
              >
                News Portal
              </motion.h1>
            </Link>
            <DropdownMenu/>
          </div>
          <ImExit className='text-3xl m-2 cursor-pointer' onClick={()=>{Cookies.set(LOGIN_COOKIE_KEY,false);router.push('/');router.reload()}}/>
        </motion.div>      
      ):<></>}  
    </>
  )
}

export default Header