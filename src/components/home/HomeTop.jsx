import React from 'react'
import Video from './Video'

const HomeTop = () => {
    return (
        <div className='font-[font1] uppercase text-center leading-[9vw]'>
            <div className='text-[9.5vw]'>The spark for</div>
            <div className='text-[9.5vw] flex items-center justify-center'>all <div className='h-[7vw] w-[15vw] rounded-full overflow-hidden'><Video/></div> things</div>
            <div className='text-[9.5vw]'>creative</div>
        </div>
    )
}

export default HomeTop