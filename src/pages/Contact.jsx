import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Contact = () => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = useRef(null)


    useGSAP(() => {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (self.direction === 1) {
          gsap.to(scroller.current, { 
            rotate: 5, 
            duration: 0.5, 
            ease: "power2.out" 
          });
        } else if (self.direction === -1) {
          gsap.to(scroller.current, { 
            rotate: -5, 
            duration: 0.5, 
            ease: "power2.out" 
          });
        }
      }
    });
  });
        
    
    return (
        <div className=' overflow-x-hidden h-auto bg-black w-full'>
            <div className='relative'>
                <h1 className='lg:text-[9.5vw] text-[12vw] leading-[11vw] uppercase lg:leading-[8.5vw] lg:pt-3 md:pt-[12vw] pt-[100px] text-center'>To talk <br />
                    about <br />
                    your <br />
                    project</h1>
                <div className='w-full gap-4 flex lg:justify-between  md:justify-between md:flex-row justify-center lg:flex-row flex-col  lg:p-2 pt-10 items-center lg:absolute bottom-0'>
                    <p className=' text-center p-3'>Onscreen or in an office. <br />
                        Here. There. <br />
                        Anywhere.</p>
                    <p className='text-center p-3 hover:underline hover:text-[#d3fd50] transition-all duration-500 cursor-pointer'>
                        525 Av. Viger O - Suite 400 <br />
                        Montréal, QC H2Z 1G6 →</p>
                </div>
            </div>
            <div className='lg:py-30 md:py-20 py-10'>
               <div ref={scroller} className=' bg-[#d3fd10] flex items-center justify-end w-[130%]'>
                 <div  className='py-1 text-black  font-[font2] overflow-hidden bg-[#d3fd50]'>
                     <h1 className='contactText text-[9.5vw] text-nowrap  uppercase leading-[8.5vw] pt-3 text-center'>
                        hello@k72.com
                        hello@k72.com 
                        hello@k72.com 
                        hello@k72.com 
                         </h1>
                </div>
               </div>
            </div>
            <div className='h-[40vh]'>
                <h1 className='uppercase text-xl text-center'>follow us</h1>
                <div className='flex gap-2 lg:text-[3vw] justify-center my-5 text-[4vw]'>
                    <h2 className=' border-4 rounded-full px-5 lg:leading-none pt-2'>FB</h2>
                    <h2 className='border-4 rounded-full px-5 lg:leading-none pt-2'>IG</h2>
                    <h2 className=' border-4 rounded-full px-5 lg:leading-none pt-2'>IN</h2>
                    <h2 className='border-4 rounded-full px-5 lg:leading-none pt-2'>BE</h2>
                </div>
            </div>
        </div>
    )
}

export default Contact