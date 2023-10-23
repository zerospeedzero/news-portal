

import React, { useEffect } from 'react'
import NewsGrid from '@/Components/NewsGrid'
import Spinner from '@/Components/Spinner'
import Official from '@/Components/Official'
import { useRouter } from "next/router";
import Cookies from 'js-cookie';

function Category({vantaEffect}) {
  const LOGIN_COOKIE_KEY = "login_attempts";
  const router = useRouter();
  const [news, setNews] = React.useState('')
  const category = router.query.category || 'none'
  const categorySlugs = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

  const [showOfficial, setShowOfficial] = React.useState(false)
  const showURL = (value) => {
    setShowOfficial(value)
  }
  const getNews = async (category) => {
    if (category === 'none') {
      return
    }
    try {
      setNews()
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
      // const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
      const news = await res.json()
      setTimeout(() => {
        setNews(news)
      }, 300)
    } catch (error) {
      console.log("Can get the news!")
      setNews([])
    }



  }
  useEffect(() => {
    console.log(router.query) 
    const category = router.query.category || 'none'
    getNews(category)
    console.log(news)
  }, [router.query.category])
  useEffect(() => {
    if (Cookies.get(LOGIN_COOKIE_KEY) !== "true") {
      router.push("/login"); 
    }
  }, []);
  return (
    <>
      <div className='h-16'></div>
      {showOfficial && (<Official url={showOfficial} showURL={showURL} />)}
      {news ? (
        <NewsGrid heading={category} articles={news.articles} showURL={showURL} vantaEffect={vantaEffect}/>
      ) : (
        <div>
          <Spinner message='Loading News...'/>
          <div className='h-screen'></div>
        </div>
      )
      }
    </>
  )
}

export default Category