import React from 'react'
import { useRouter } from 'next/router'
const startsearch = () => {
  const router = useRouter()
  React.useEffect(() => {
    router.push('/search')
  }, [])
  return (
    <div>startsearch</div>
  )
}

export default startsearch