import React from 'react'
import Video from './Video'

const HomeTop = () => {
    return (
        <div className='font-[font1] uppercase text-center leading-[9vw]'>
            <div className='lg:text-[9.2vw] md:text-[10vw] md:leading-[9vw] lg:leading-[8vw] text-[13vw] leading-[12vw]'>The spark for</div>
            <div className='lg:text-[9.2vw] md:text-[10vw] md:leading-[9vw] lg:leading-[8vw] text-[13vw] leading-[12vw] flex items-center justify-center'>all <div className='h-[7vw] w-[15vw] rounded-full overflow-hidden'><Video/></div> things</div>
            <div className='lg:text-[9.2vw] md:text-[10vw] md:leading-[9vw] lg:leading-[8vw] text-[13vw] leading-[12vw]'>creative</div>
        </div>
    )
}

export default HomeTop