import '@/styles/globals.css'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import { MessageProvider } from "@/contexts/MessageContext";
// import Rings from '@/components/Rings/VantaRings'
import Fog from '@/Components/Fog/VantaFog'
import { useRef, useEffect, useState } from "react";
export default function App({ Component, pageProps }) {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      // setVantaEffect(Rings({
      setVantaEffect(Fog({
        el: myRef.current,
        scale: 1.00,
        scaleMobile: 2.00,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        // highlightColor: 0xffc300,
        // midtoneColor: 0xff1f00,
        // lowlightColor: 0x2d00ff,
        // baseColor: 0xfffbeb,
        highlightColor: 0xa4ff,
        midtoneColor: 0xe1ff,
        lowlightColor: 0xececed,
        baseColor: 0xffebeb,
        speed: 2.30,
        zoom: 0.80
        
      }))
    }
    return () => {
    }
  }, [vantaEffect])
  const changeColor = (color) => {
    if (vantaEffect) {
      vantaEffect.setOptions({
        highlightColor: 0x000000,
      })
    }
  }
  const changeSpeed = (speed) => {
    const pace = speed || '1'
    if (vantaEffect) {
      vantaEffect.setOptions({
        speed: pace,
      })
    }
  }
  return (
    <>
      <div ref={myRef} className="fixed w-full h-[100vh] -z-5" onClick={()=>changeSpeed()}></div>
      <Header/>
      <MessageProvider>
        <Component {...pageProps} vantaEffect={vantaEffect}/>
      </MessageProvider>
      <Footer/>
    </>
  )
}
