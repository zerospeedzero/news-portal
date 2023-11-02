import React, { useState, useEffect } from 'react'
import Official from '@/Components/Official'
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { motion } from 'framer-motion'

function Search({vantaEffect}) {
  const LOGIN_COOKIE_KEY = "login_attempts";
  const router = useRouter();
  const [inputText, setInputText] = useState('')
  const [showOfficial, setShowOfficial] = React.useState(false)
  const showURL = (value) => {
    setShowOfficial(value)
  }
  const getSearchResults = async () => {
    router.push('/search/' + encodeURIComponent(inputText))
  }
  useEffect(() => {
    if (Cookies.get(LOGIN_COOKIE_KEY) !== "true") {
      router.push("/login"); 
    }
  }, []);
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      const news = getSearchResults()
    }
  }  
  return (
    <>
      <div className='h-16'></div>
      {showOfficial && (<Official url={showOfficial} showURL={showURL} />)}
      <div className='h-screen'>
        <div className='h-screen'>
          <div className="fixed top-0 left-0 right-0 bottom-0 text-center p-8 text-white flex flex-col justify-center items-center">
            <div className='w-fit bg-blue-500/20 p-4 m-4 rounded-lg shadow-lg'>
              <h3 className="text-3xl font-semibold text-blue-900 text-start m-4">Searching by keyword(s)</h3>
              <div className='flex flex-row justify-center items-center'>
                <input autocomplete="one-time-code" className="h-[3rem] w-full text-lg text-black m-4 p-2 rounded-md shadow-md" type="text" placeholder="Search.." name="search" value={inputText} onChange={e => {setInputText(e.target.value)}} onKeyPress={handleKeyPress} />
                <motion.button className=' bg-orange-400 text-white p-3 m-4 ml-1 rounded-md shadow-md'
                  onClick={()=>{getSearchResults()}}
                  initial={{x:'-8rem', y:'-2rem', scale:6, opacity: 1}}
                  animate={{x:'-0rem', y:'0rem', scale:1, opacity: 1}}
                  transition={{delay: 0.8,type: 'spring', bounce: 0.4, duration: 0.8}}
                >
                  Search
                </motion.button>
              </div>
            </div>
          </div>            
        </div>
      </div>
    </>
  )
}

export default Search