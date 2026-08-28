import React from 'react'

const ProjectCards = (props) => {
   
  return (
    <>
          <div className='w-1/2 lol relative group cursor-pointer hover:rounded-4xl transition-all overflow-hidden duration-200 h-full bg-blue-400'>
          <img src={props.image1} 
          className='w-full h-full object-cover group-hover:scale-105 transition-all' alt="" />
          <div className='w-full h-full opacity-0 group-hover:opacity-100 absolute transition-all hover:bg-black/30 text-white  top-0 left-0 flex items-center justify-center'>
            <h2 className='uppercase text-[3vw] leading-none pt-3 cursor-pointer border-4 rounded-full px-5 '>view project</h2>
          </div>
          </div>
          
          <div className='w-1/2 lol relative group cursor-pointer hover:rounded-4xl transition-all overflow-hidden duration-200 h-full bg-blue-400'>
          <img src={props.image2} 
          className='w-full  h-full object-cover group-hover:scale-105 transition-all' alt="" />
          <div className='w-full h-full opacity-0 group-hover:opacity-100 absolute transition-all hover:bg-black/30 text-white  top-0 left-0 flex items-center justify-center'>
            <h2 className='uppercase text-[3vw] leading-none pt-3 cursor-pointer border-4 rounded-full px-5 '>view project</h2>
          </div>
          </div>
        </>
  )
}

export default ProjectCards