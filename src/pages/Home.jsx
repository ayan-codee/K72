import React from 'react'
import Video from "../components/home/Video.jsx";
import HomeTop from '../components/home/HomeTop.jsx';
import HomeBottomLink from '../components/home/HomeBottomLink.jsx';
import Paragraph from '../components/home/Paragraph.jsx';

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <Video/>
        </div>
        <div className='h-screen w-screen relative flex flex-col
          lg:justify-between lg:items-center  md:items-center
           justify-end lg:gap-[1vw] gap-6 overflow-hidden lg:pt-2 pb-2
           pt-[10vh]
           '>
            <HomeTop/>
            <Paragraph/>
          <HomeBottomLink/>
        </div>
    </div>
  )
}

export default Home