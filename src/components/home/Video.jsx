import React from 'react'
import vid from '../../assets/videos/heroVid.mp4'

const Video = () => {
  return (
        <div className='h-full w-full'>
            <video className='h-full w-full object-cover' autoPlay loop muted>
                <source  src={vid}/>
            </video>
        </div>
  )
}

export default Video