import React from 'react'
import Stair from './Stair'

const NavLinkPage = () => {
  return (
    <div className='w-screen h-screen bg-black fixed top-0 z-5 font-[font2] '>
        <Stair bg="bg-gray-700"/>
        <div className='fixed p-2 w-screen flex justify-between'>
            <div className='p-3 '>
             <svg xmlns="http://www.w3.org/2000/svg" f width="103" height="44" viewBox="0 0 103 44">
                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
           </div>
           <div className='w-20 cursor-pointer h-[5vw] pt-6 flex items-center justify-center'>
            <div className='w-0.5 h-28 bg-white rotate-45 origin-center'></div>
            <div className='w-0.5 h-28 bg-white -rotate-45'></div>
           </div>
        </div>

        <div className='py-40'>
            <div className='linktext border-t  border-gray-500 relative overflow-hidden'>
                <h1 className='text-[7vw]  leading-none pt-5 text-center uppercase'>work</h1>
                
            <div className='w-full linkcontainer absolute top-0 bg-[#d3fd50]   h-full'>
                <div className='flex link w-full h-full flex-nowrap items-center gap-5'>
                <h1 className='text-[7vw] text-nowrap text-black  leading-none pt-5  p-0 text-center uppercase'>see everything</h1>
                <img className='h-[5vw] shrink-0 rounded-full w-[12vw]      object-cover' src="src/assets/images/navbarImages/K72_article_ChatGPT_blogue.webp" alt="" />
                <h1 className='text-[7vw] text-nowrap text-black  leading-none pt-5  p-0 text-center uppercase'>see everything</h1>
                <img className='h-[5vw] shrink-0 rounded-full w-[12vw]      object-cover' src="src/assets/images/navbarImages/Capture_d’ecran_le_2025-09-17_a.webp" alt="" />
                <h1 className='text-[7vw] text-nowrap text-black  leading-none pt-5  p-0 text-center uppercase'>see everything</h1>
                <img className='h-[5vw] shrink-0 rounded-full w-[12vw]      object-cover' src="src/assets/images/navbarImages/PJC_SiteK72_Thumbnail_640x290.webp" alt="" />
                </div>
            </div>
            </div>

            <div className='linktext border-t border-gray-500 relative overflow-hidden'>
                <h1 className='text-[7vw] leading-none pt-5  p-0 text-center uppercase'>agency</h1>
                
            <div className='w-full linkcontainer absolute top-0  bg-[#d3fd50]   h-full'>
               <div className='flex link w-full h-full flex-nowrap items-center gap-5'>
                <h1 className='text-[7vw] text-nowrap text-black leading-none pt-5  p-0 text-center uppercase'>know us</h1>
                <img className='h-[5vw] shrink-0 rounded-full w-[12vw]      object-cover' src="src/assets/images/navbarImages/Thumbnail.webp" alt="" />
              
                <h1 className='text-[7vw] text-nowrap text-black leading-none pt-5  p-0 text-center uppercase'>know us</h1>
                <img className='h-[5vw] shrink-0 rounded-full w-[12vw]      object-cover' src="src/assets/images/navbarImages/PJC_SiteK72_Thumbnail_640x290.webp" alt="" />
              
                <h1 className='text-[7vw] text-nowrap text-black leading-none pt-5  p-0 text-center uppercase'>know us</h1>
                <img className='h-[5vw] shrink-0 rounded-full w-[12vw]      object-cover' src="src/assets/images/navbarImages/Michele_640x290.webp" alt="" />
              
                </div>
            </div>
            </div>

            <div className='linktext border-t border-gray-500 relative'>
                <h1 className='text-[7vw] leading-none pt-5  p-0 text-center uppercase'>contact</h1>
                
            <div className='w-full linkcontainer absolute top-0  bg-[#d3fd50]   h-full'>
               <div className='flex link w-full h-full flex-nowrap items-center gap-5'>
                <h1 className='text-[7vw] text-nowrap text-black leading-none pt-5  p-0 text-center uppercase'>send us a fax</h1>
                <img className='h-[5vw] shrink-0 rounded-full w-[12vw]      object-cover' src="src/assets/images/navbarImages/K72_article_ChatGPT_blogue.webp" alt="" />
                <h1 className='text-[7vw] text-nowrap text-black leading-none pt-5  p-0 text-center uppercase'>send us a fax</h1>
                <img className='h-[5vw] shrink-0 rounded-full w-[12vw]      object-cover' src="src/assets/images/navbarImages/K72_article_ChatGPT_blogue.webp" alt="" />
                <h1 className='text-[7vw] text-nowrap text-black leading-none pt-5  p-0 text-center uppercase'>send us a fax</h1>
                <img className='h-[5vw] shrink-0 rounded-full w-[12vw]      object-cover' src="src/assets/images/navbarImages/K72_article_ChatGPT_blogue.webp" alt="" />
                </div>
            </div>
            </div>

            <div className='linktext border-y border-gray-500 relative'>
                <h1 className='text-[7vw] leading-none pt-5  p-0 text-center uppercase'>blog</h1>
                
            <div className='w-full linkcontainer absolute top-0  bg-[#d3fd50]   h-full'>
               <div className='flex link w-full h-full flex-nowrap items-center gap-5'>
                <h1 className='text-[7vw] text-nowrap text-black  leading-none pt-5  p-0 text-center uppercase'>read articles</h1>
                <img className='h-[5vw] shrink-0 rounded-full w-[12vw]      object-cover' src="src/assets/images/navbarImages/Capture_d’ecran_le_2025-09-17_a.webp" alt="" />
                <h1 className='text-[7vw] text-nowrap text-black  leading-none pt-5  p-0 text-center uppercase'>read articles</h1>
                <img className='h-[5vw] shrink-0 rounded-full w-[12vw]      object-cover' src="src/assets/images/navbarImages/50ff59cc0550df5b36543807a58db98c.webp" alt="" />
                <h1 className='text-[7vw] text-nowrap text-black  leading-23 pt-5  p-0 text-center uppercase'>read articles</h1>
                <img className='h-[5vw] shrink-0 rounded-full w-[12vw]      object-cover' src="D:\Websites\K72\K72 YT\src\assets\images\navbarImages\Michele_640x290.webp" alt="" />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default NavLinkPage