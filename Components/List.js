import React, { useEffect } from 'react'
import NewsGrid from '@/Components/NewsGrid'
import Spinner from '@/Components/Spinner'
import Official from '@/Components/Official'
import { useRouter } from "next/router";
import Cookies from 'js-cookie';

function Home({vantaEffect, news, heading}) {
  const LOGIN_COOKIE_KEY = "login_attempts";
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true)
  const [showOfficial, setShowOfficial] = React.useState(false)
  const showURL = (value) => {
    setShowOfficial(value)
  }
  useEffect(() => {
    if (Cookies.get(LOGIN_COOKIE_KEY) !== "true") {
      router.push("/login"); 
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 300) 
  }, []);
  return (
    <>
      <div className='h-16'></div>
      {showOfficial && (<Official url={showOfficial} showURL={showURL} />)}
      {!isLoading ? (
        <NewsGrid heading={heading} articles={news.articles} showURL={showURL} vantaEffect={vantaEffect}/>
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

export default Home