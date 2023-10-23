import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Image from 'next/image'

const Article = ({article, showURL, vantaEffect}) => {
  return (
    <> 
      {article.urlToImage && (
        <Link href={article.url} rel="noopener noreferrer">
          <motion.div
            className='relative flex flex-col justify-start h-full bg-s1 text-p2 rounded-xl shadow-lg cursor-pointer'
            whileHover={{scale: 1.05, color: '#000000', backgroundColor: '#DCE8EA', shadow: '0px 0px 20px 0px rgba(0,0,0,0.75)'}}
            // onClick={()=>showURL(article.url)}
          >
            <Image
              className='rounded-t-xl'
              src={article.urlToImage || 'https://via.placeholder.com/500x200.png?text=No+Image'}
              alt={article.title}
              width={500}
              height={200}
              layout="fixed"
              />
            <motion.h3
              className='text-xl font-bold p-4'
              >
              {article.title}
            </motion.h3>
            <motion.p
              className='text-base p-4'
              >
              {article.description}
            </motion.p>
            <div className='h-8'></div>
            <span className='absolute right-4 bottom-4 text-sm text-end text-black/60'>Source: <strong>{article.source.name}</strong></span>
          </motion.div>
        </Link>
      )}
    </>
  )
}

export default Article