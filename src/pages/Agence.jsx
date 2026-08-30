import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import img from '/images/character/Carl_480x640.webp'
import img1 from '/images/character/CAMILLE_480X640_2.webp'
import img2 from '/images/character/ChantalG_480x640.webp'
import img3 from '/images/character/joel_480X640_3.webp'
import img4 from '/images/character/MEGGIE_480X640_2.webp'
import img5 from '/images/character/MEL_480X640.webp'
import img6 from '/images/character/Michele_480X640.webp'
import img7 from '/images/character/Olivier_480x640.webp'


const Agence = () => {
  const [index, setindex] = useState(0);



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

  if (window.innerWidth < 1024) {
    useEffect(() => {
      const timer = setInterval(() => {
        setindex((previndex) => (previndex + 1) % imgArr.length)
      }, 1000);
      return () => clearInterval(timer)

    }, [imgArr])
  }


  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
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
              imgIndex = Math.floor(e.progress * imgArr.length - 1);
            }
            imgRef.current.src = imgArr[imgIndex];
          }
        }
      });
    });

  });
  return (
    <div>
      <div className='section-1 py-20'>
        <div
          ref={imageContainerRef}
          className='
    absolute 
    lg:top-[25vh] top-[10vh] md:top-[25vh] 
    left-[30vw] 
    lg:w-[250px] lg:h-[350px] 
    md:w-[250px] md:h-[350px] 
    w-30 h-40
    overflow-hidden rounded-2xl shadow-sm shadow-black
  '
        >
          <img ref={imgRef} src={imgArr[index]} loading="lazy" alt="Project" className='w-full h-full object-cover' />
        </div>
        <div className='lg:mt-[55vh] md:mt-[50vh] mt-[30vw] font-[font2] relative text-black'>
          <h1 className='text-black text-[20vw]  leading-[17vw] uppercase text-center'>
            SEVEN7Y <br />
            TWO
          </h1>
          <div className='font-[font1] p-5 pt-20 lg:ml-[40%]'>
            <p className='lg:leading-[3.7vw] text-[6vw] leading-[6vw] lg:text-[4vw] mt-5 '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and <br /> open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring perspective to every brand story we help tell.</p>
          </ div>
        </div>
      </div>

      {/* section 2 start */}
      <div className="section-2 h-screen bg-blue-100">

      </div>
    </div>
  )
}

export default Agence