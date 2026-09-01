import React, { useContext, useRef } from 'react'
import Stair from './Stair'
import { NavBarContext } from './NavBarContextProvider'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const NavLinkPage = () => {
    const [nav, setNav] = useContext(NavBarContext);
    const navbarref = useRef(null)

    useGSAP(() => {

        if (nav) {
            navbarref.current.style.display = 'block'

        } else {
            navbarref.current.style.display = 'none'

        }
    }, [nav])


    useGSAP(() => {
        const tl = gsap.timeline();

        gsap.set('.amimContainer', { y: '0%', display: 'flex' })
        gsap.set('.stair', { y: '0%' })

        tl.to('.stair', {
            y: '100%',
            stagger: {
                each: 0.1,
                from: "start"
            },
            duration: 0.8,
            ease: "power2.inOut"
        })
      
            tl.to('.amimContainer', {
                display: 'none',
                duration: 0
            });

    }, [nav]);

    return (
        <>
            <div className={`amimContainer w-screen h-screen fixed top-0 left-0 flex ${nav ? 'z-50' : 'z-10'}`}> 
                <div className='stair w-1/4 h-full  bg-gray-700 pointer-events-auto'></div>
                <div className='stair w-1/4 h-full  bg-gray-700 pointer-events-auto'></div>
                <div className='stair w-1/4 h-full  bg-gray-700 pointer-events-auto'></div>
                <div className='stair w-1/4 h-full  bg-gray-700 pointer-events-auto'></div>
            </div>

            <div ref={navbarref} className='navcontainertransition-all w-screen h-screen bg-black fixed top-0  z-20 font-[font2] '>

                <div className='fixed p-2 w-screen flex justify-between'>
                    <div className='p-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" f width="103" height="44" viewBox="0 0 103 44">
                            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                    <div className='w-20 group cursor-pointer h-[5vw] pt-12 pr-8 lg:pt-6 lg:pr-6 flex items-center justify-center'
                        onClick={() => {
                            setNav(false)
                        }}
                    >
                        <div className='w-0.5 h-28 group-hover:bg-[#d3fd50]  transition-all  bg-white rotate-45 origin-center'></div>
                        <div className='w-0.5 h-28 group-hover:bg-[#d3fd50]  transition-all  bg-white -rotate-45'></div>
                    </div>
                </div>

                <div className='lg:py-40 py-80'>
                    <Link to='/projects' onClick={()=>{
                        setNav(false)
                    }}>
                    <div className='linktext border-t  border-gray-500 relative overflow-hidden'>
                        <h1 className='lg:text-[7vw]   text-[12vw]  leading-none pt-5 text-center uppercase'>work</h1>

                        <div className='w-full linkcontainer absolute top-0 bg-[#d3fd50]   h-full'>
                            <div className='flex link w-full h-full flex-nowrap items-center gap-5'>
                                <h1 className='lg:text-[7vw]  text-[12vw]    text-nowrap text-black  leading-none pt-5  p-0 text-center uppercase'>see everything</h1>
                                <img className='lg:h-[5vw] h-[7vw] shrink-0 rounded-full lg:w-[12vw] w-[20vw]      object-cover' src="/images/navbarImages/K72_article_ChatGPT_blogue.webp" alt="" />
                                <h1 className='lg:text-[7vw]  text-[12vw]   text-nowrap text-black  leading-none pt-5  p-0 text-center uppercase'>see everything</h1>
                               <img className='lg:h-[5vw] h-[7vw] shrink-0 rounded-full lg:w-[12vw] w-[20vw]      object-cover' src="/images/navbarImages/Capture_d’ecran_le_2025-09-17_a.webp" alt="" />
                                <h1 className='lg:text-[7vw]  text-[12vw]   text-nowrap text-black  leading-none pt-5  p-0 text-center uppercase'>see everything</h1>
                               <img className='lg:h-[5vw] h-[7vw] shrink-0 rounded-full lg:w-[12vw] w-[20vw]      object-cover' src="/images/navbarImages/PJC_SiteK72_Thumbnail_640x290.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    </Link>

                     <Link to='/agence' onClick={()=>{
                        setNav(false)
                    }}>
                    <div className='linktext border-t border-gray-500 relative overflow-hidden'>
                        <h1 className='lg:text-[7vw]  text-[12vw]   leading-none pt-5  p-0 text-center uppercase'>agency</h1>

                        <div className='w-full linkcontainer absolute top-0  bg-[#d3fd50]   h-full'>
                            <div className='flex link w-full h-full flex-nowrap items-center gap-5'>
                                <h1 className='lg:text-[7vw]  text-[12vw]   text-nowrap text-black leading-none pt-5  p-0 text-center uppercase'>know us</h1>
                               <img className='lg:h-[5vw] h-[7vw] shrink-0 rounded-full lg:w-[12vw] w-[20vw]      object-cover' src="/images/navbarImages/Thumbnail.webp" alt="" />

                                <h1 className='lg:text-[7vw]  text-[12vw]   text-nowrap text-black leading-none pt-5  p-0 text-center uppercase'>know us</h1>
                               <img className='lg:h-[5vw] h-[7vw] shrink-0 rounded-full lg:w-[12vw] w-[20vw]      object-cover' src="/images/navbarImages/PJC_SiteK72_Thumbnail_640x290.webp" alt="" />

                                <h1 className='lg:text-[7vw]  text-[12vw]   text-nowrap text-black leading-none pt-5  p-0 text-center uppercase'>know us</h1>
                               <img className='lg:h-[5vw] h-[7vw] shrink-0 rounded-full lg:w-[12vw] w-[20vw]      object-cover' src="/images/navbarImages/Michele_640x290.webp" alt="" />

                            </div>
                        </div>
                    </div>
                     </Link>

                     <Link to='/contact' onClick={()=>{
                        setNav(false)
                    }}>
                    <div className='linktext border-t border-gray-500 relative'>
                        <h1 className='lg:text-[7vw]  text-[12vw]   leading-none pt-5  p-0 text-center uppercase'>contact</h1>

                        <div className='w-full linkcontainer absolute top-0  bg-[#d3fd50]   h-full'>
                            <div className='flex link w-full h-full flex-nowrap items-center gap-5'>
                                <h1 className='lg:text-[7vw]  text-[12vw]   text-nowrap text-black leading-none pt-5  p-0 text-center uppercase'>send us a fax</h1>
                               <img className='lg:h-[5vw] h-[7vw] shrink-0 rounded-full lg:w-[12vw] w-[20vw]      object-cover' src="/images/navbarImages/K72_article_ChatGPT_blogue.webp" alt="" />
                                <h1 className='lg:text-[7vw]  text-[12vw]   text-nowrap text-black leading-none pt-5  p-0 text-center uppercase'>send us a fax</h1>
                               <img className='lg:h-[5vw] h-[7vw] shrink-0 rounded-full lg:w-[12vw] w-[20vw]      object-cover' src="/images/navbarImages/K72_article_ChatGPT_blogue.webp" alt="" />
                                <h1 className='lg:text-[7vw]  text-[12vw]   text-nowrap text-black leading-none pt-5  p-0 text-center uppercase'>send us a fax</h1>
                               <img className='lg:h-[5vw] h-[7vw] shrink-0 rounded-full lg:w-[12vw] w-[20vw]      object-cover' src="/images/navbarImages/K72_article_ChatGPT_blogue.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    </Link>

                    <Link to='/blog' onClick={()=>{
                        setNav(false)
                    }}>
                    <div className='linktext border-y border-gray-500 relative'>
                        <h1 className='lg:text-[7vw]  text-[12vw]   leading-none pt-5  p-0 text-center uppercase'>blog</h1>

                        <div className='w-full linkcontainer absolute top-0  bg-[#d3fd50]   h-full'>
                            <div className='flex link w-full h-full flex-nowrap items-center gap-5'>
                                <h1 className='lg:text-[7vw]  text-[12vw]   text-nowrap text-black  leading-none pt-5  p-0 text-center uppercase'>read articles</h1>
                               <img className='lg:h-[5vw] h-[7vw] shrink-0 rounded-full lg:w-[12vw] w-[20vw]      object-cover' src="/images/navbarImages/Capture_d’ecran_le_2025-09-17_a.webp" alt="" />
                                <h1 className='lg:text-[7vw]  text-[12vw]   text-nowrap text-black  leading-none pt-5  p-0 text-center uppercase'>read articles</h1>
                               <img className='lg:h-[5vw] h-[7vw] shrink-0 rounded-full lg:w-[12vw] w-[20vw]      object-cover' src="/images/navbarImages/50ff59cc0550df5b36543807a58db98c.webp" alt="" />
                                <h1 className='lg:text-[7vw]  text-[12vw]   text-nowrap text-black  leading-23 pt-5  p-0 text-center uppercase'>read articles</h1>
                               <img className='lg:h-[5vw] h-[7vw] shrink-0 rounded-full lg:w-[12vw] w-[20vw]      object-cover' src="public/images/character/Michele_480X640.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavLinkPage