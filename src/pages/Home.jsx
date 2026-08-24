import React from 'react'
import Video from "../components/home/Video.jsx";
import HomeTop from '../components/home/HomeTop.jsx';
import HomeBottomLink from '../components/home/HomeBottomLink.jsx';

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <Video/>
        </div>
        <div className='h-screen w-screen relative flex flex-col
         justify-between items-center overflow-hidden pt-2 pb-1'>
            <HomeTop/>
          <HomeBottomLink/>
        </div>
    </div>
  )
}

export default Home