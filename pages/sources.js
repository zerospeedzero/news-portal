import React from 'react'
import Sources from '@/Components/Sources'
export const getServerSideProps = async () => {
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
    const sources = await res.json()
    // console.log(sources)
    return {
      props: {
        sources
      }
    }
  } catch (error) {
    return {props: {sources: []}}
  }
}

export default  ({sources}) => {
  return (
    <>
      <Sources sources={sources}/>
    </>
  )
}

// export default sources

