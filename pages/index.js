import React from 'react'
import List from '@/Components/List'

export const getServerSideProps = async () => {
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
    const news = await res.json()
    // console.log(news)
    return {
      props: {
        news
      }
    }
  } catch (error) {
    return {props: {news: []}}
  }
}

const index = ({news}) => {
  return (
    <>
      <List news={news} />
    </>
  )
}

export default index