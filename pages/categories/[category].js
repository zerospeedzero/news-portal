import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import List from '@/Components/List'
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const categorySlugs = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  const paths = categorySlugs.map(slug => ({ params: { category: slug } }));
  return {
    paths, fallback: false
  };
}

export const getStaticProps = async ({params}) => {
  const category = params.category.toString() || 'none'
  if (category === 'none') {
    return
  }
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
    const news = await res.json()
    return {
      props: {
        news
      }
    }
  } catch (error) {
    console.log("Can get the news!")
    return {props: {news: []}}
  }
}

function Category({vantaEffect, news}) {
  const LOGIN_COOKIE_KEY = "login_attempts";
  const router = useRouter();
  const category = router.query.category || 'none'
 
  useEffect(() => {
    if (Cookies.get(LOGIN_COOKIE_KEY) !== "true") {
      router.push("/login"); 
    }
  }, []);
  return (
    <>
      <List news={news} heading={category} />
    </>
  )
}

export default Category