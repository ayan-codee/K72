import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomLink = () => {
  return (
    <div className='flex items-center justify-center gap-[1vw]'>
        <Link className='hover:text-[#d3fd50] hover:border-[#d3fd50] transition duration-300 font-[font2] leading-[5.5vw] pt-5  px-6 py-0 border-3 border-white uppercase rounded-full text-[6.8vw]'  to='/projects'>works</Link>
        <Link className='hover:text-[#d3fd50] hover:border-[#d3fd50] transition duration-300 font-[font2] leading-[5.5vw] pt-5 px-6 py-0 border-3 border-white uppercase rounded-full text-[6.8vw]' to='/agence'>agency</Link>
    </div>
  )
}

export default HomeBottomLink