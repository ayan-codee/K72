import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stair = (props) => {
    const currPath = useLocation().pathname

    useGSAP(() => {
        const tl = gsap.timeline();

        gsap.set('.amimContainer', { y: '0%', display: 'flex' })
        gsap.set('.stair', { y: '0%' })

        tl.to('.stair', {
            y: '100%',
            stagger: {
                each: 0.1,
                from: "start"
            },
            duration: 0.8,
            ease: "power2.inOut"
        })

            .to('.amimContainer', {
                display: 'none',
                duration: 0
            });

    }, [currPath]);

    return (
        <div className='amimContainer w-screen h-screen fixed top-0 left-0 flex z-50'>
            <div className={`stair w-1/6 h-full ${props.bg || 'bg-black'} pointer-events-auto`}></div>
            <div className={`stair w-1/6 h-full ${props.bg || 'bg-black'} pointer-events-auto`}></div>
            <div className={`stair w-1/6 h-full ${props.bg || 'bg-black'} pointer-events-auto`}></div>
            <div className={`stair w-1/6 h-full ${props.bg || 'bg-black'} pointer-events-auto`}></div>
            <div className={`stair w-1/6 h-full ${props.bg || 'bg-black'} pointer-events-auto`}></div>
            <div className={`stair w-1/6 h-full ${props.bg || 'bg-black'} pointer-events-auto`}></div>
        </div>
    )
}

export default Stair