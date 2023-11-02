import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import List from '@/Components/List'
import { useRouter } from "next/router";


export const getServerSideProps = async (context) => {
  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=` + context.params.search  + `&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
    const news = await res.json()
    return {
      props: {
        news
      }
    }
  } catch (error) {
    console.log("Can not get the news!")
    console.log(error)
    return {
      props: {
        news: []
      }
    }
  }
}
function Search({vantaEffect, news}) {
  const LOGIN_COOKIE_KEY = "login_attempts";
  const router = useRouter(); 
 
  useEffect(() => {
    if (Cookies.get(LOGIN_COOKIE_KEY) !== "true") {
      router.push("/login"); 
    }
  }, []);  
  return (
    <>
      <List news={news}/>
    </>
  )
}

export default Search