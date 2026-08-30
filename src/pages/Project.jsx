import React from 'react'
import ProjectCards from '../components/project/ProjectCards';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const imagesData = [
    {
      image1:'src/assets/images/projectImages/CF_thumbnail.webp',
      image2:'src/assets/images/projectImages/OKA_thumbnail.webp'
    },
    {
      image1:'src/assets/images/projectImages/opto_thumbnail2.webp',
      image2:'src/assets/images/projectImages/PJC_SiteK72_Thumbnail_1280x960.webp'
    },
    {
      image1:'src/assets/images/projectImages/WS---K72.ca---Thumbnail.webp',
      image2:'src/assets/images/projectImages/thumbnailimage_shelton.webp'
    },
    {
      image1:'src/assets/images/projectImages/thumbnailimage_OSM.webp',
      image2:'src/assets/images/projectImages/thumbnailimage_atable2.webp'
    },
    {
      image1:'src/assets/images/projectImages/chalaxeur-thumbnail_img.webp',
      image2:'src/assets/images/projectImages/PME-MTL_Thumbnail.webp'
    },
    {
      image1:'src/assets/images/projectImages/100temps_Thumbnail.webp',
      image2:'src/assets/images/projectImages/crisis24_behance_1920X1200_carte.webp'
    }
  ];


    useGSAP(()=>{
        gsap.from('.hero',{
            height:50,
            stagger:{
              amount:0.5
            },
            scrollTrigger:{
                trigger:'.lol',
                start:"top 100%",
                end:"top -150%",
                markers:true,
                scrub:true
            },
            
        })
    })

  return (
    <div className='pt-[45vh] text-black p-4'>
      <div className='flex lg:-mb-[3vh]'>
        <h1 className='font-[font2] leading-none uppercase text-[12vw]'>works</h1>
        <span className='text-[2vw] font-[font1]'>{imagesData.length * 2}</span>
      </div>

      <div className='lol'>
        {imagesData.map((elem, idx)=>{
           return <div className='w-full hero font-[font2]  flex gap-2 mt-2 h-120'>
              <ProjectCards  key={idx} image1={elem.image1} image2={elem.image2}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default Project