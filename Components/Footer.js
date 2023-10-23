import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from 'next/router';
const Footer = () => {
  const router = useRouter();
  return (
    <>
      {router.pathname != '/login' ? (
        <div className='relative'>
          <motion.div
          className='w-full  bg-gradient-to-br from-blue-900 to-cyan-600 text-p1 p-4 z-50 flex flex-row justify-between items-center shadow-lg'
          // className=' bg-gray-800 text-p1 w-screen flex flex-row justify-between items-center p-1 shadow-lg'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{delay: 0.1, duration: 1.2 }}
          >
            <div className='p-4 max-w-6xl mx-auto'>
              <h1 class="text-2xl font-bold mb-4">Disclaimer</h1>
              <p class="text-xs mb-2">This website is intended for educational and development purposes. I use the News API to aggregate and display news headlines from various sources.</p>
              <ul class="text-xs list-disc pl-6 mb-4">
                  <li className='mb-2'><strong className='text-md'>Content Source:</strong> I do not host or store any of the source news content on this web server. All news articles and content remain the property of their respective publishers.</li>
                  <li className='mb-2'><strong className='text-md'>Links to Official Sources:</strong> When users click on a news headline, they will be redirected to the official website of the source where they can access the complete article. I do not reproduce or republish content without proper authorization.</li>
                  <li className='mb-2'><strong className='text-md'>Copyright Compliance:</strong> I respect intellectual property rights and make every effort to comply with copyright laws. If you believe your copyrighted material has been used inappropriately, please contact me (<a className="underline" href="mailto: george.cheng@edu.sait.ca">George Cheng).</a></li>
                  <li className='mb-2'><strong className='text-md'>Accuracy and Responsibility:</strong> While I strive for accuracy and reliability, I cannot guarantee the accuracy, timeliness, or availability of articles on external websites. Users should refer to the terms and policies of the source news websites for more information.</li>
              </ul>
            </div>
          </motion.div>
          <div className='h-[0px]'></div>
        </div>
      ):<></>}
    </>
  )
}

export default Footer