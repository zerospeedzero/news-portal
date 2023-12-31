import React from 'react'
import {motion} from 'framer-motion'
import Article from './Article'

const Grid = ({heading, articles, showURL, vantaEffect}) => {
  return (
    <>
      <div className='flex flex-row justify-center items-center'>
        <h2 className='text-3xl font-semibold text-blue-900  p-4 text-center opacity-90 capitalize'>{heading}</h2>
      </div>
      <motion.div
        className="mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-8 md:grid-cols-2 md:pt-10 lg:grid-cols-3 xl:grid-cols-4 sxl:grid-cols-5"
      >
        { articles && articles.length == 0 && (<p>No news is not good news for this website!!</p>)}
        { articles && articles.map((article, index) => (
          <Article key={index} article={article} showURL={showURL} vantaEffect={vantaEffect}/>
        ))}
      </motion.div>
    </>
  )
}

export default Grid