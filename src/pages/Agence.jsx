import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import img from  '/images/character/Carl_480x640.webp'
import img1 from '/images/character/CAMILLE_480X640_2.webp'
import img2 from '/images/character/ChantalG_480x640.webp'
import img3 from '/images/character/joel_480X640_3.webp'
import img4 from '/images/character/MEGGIE_480X640_2.webp'
import img5 from '/images/character/MEL_480X640.webp'
import img6 from '/images/character/Michele_480X640.webp'
import img7 from '/images/character/Olivier_480x640.webp'


const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageContainerRef = useRef(null);
  let imgRef = useRef(null);

  const imgArr = [
    img,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
  ]

  useGSAP(() => {
    gsap.to(imageContainerRef.current, {
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top 25%",
        pin: true,
        scrub: 4,
        end: 'top -100%',
        onUpdate: (e) => {
          let imgIndex;
          if (e.progress < 1) {
            imgIndex = Math.floor(e.progress * imgArr.length);
          } else {
            imgIndex = Math.floor(e.progress * imgArr.length - 1)
          }
          imgRef.current.src = imgArr[imgIndex];
        }
      }
    })
  })
  return (
    <div>
      <div className='section-1'>
        <div
          ref={imageContainerRef}
          className='
    absolute 
    w-[150px] h-[200px] 
    top-[25vh] sm:top-[200px] 
    left-[30vw] 
    md:w-[250px] md:h-[40vh] 
    lg:w-[250px] lg:h-[350px] 
    overflow-hidden rounded-2xl shadow-sm shadow-black
  '
        >
          <img ref={imgRef} src={img} loading="lazy" alt="Project" className='w-full h-full object-cover'  />
        </div>
        <div className='mt-[55vh] font-[font2] relative text-black'>
          <h1 className='text-black text-[20vw]  leading-[17vw] uppercase text-center'>
            SEVEN7Y <br />
            TWO
          </h1>
          <div className='font-[font1] ml-[40%]'>
            <p className='leading-[3.7vw]  text-[4vw] mt-5 '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and <br /> open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring perspective to every brand story we help tell.</p>
          </ div>
        </div>
      </div>

      {/* section 2 start */}
      <div className="section-2 h-screen">

      </div>
    </div>
  )
}

export default Agence