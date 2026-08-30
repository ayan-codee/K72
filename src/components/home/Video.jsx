import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video 
        className='h-full w-full object-cover' 
        src="/videos/heroVid.mp4" 
        preload="auto" 
        autoPlay 
        loop 
        muted 
        playsInline
      />
    </div>
  )
}

export default Video