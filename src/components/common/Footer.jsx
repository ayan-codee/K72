import React from 'react'

const Footer = () => {
    return (
        <div className='w-full  font-[font2] p-5 z-20 relative -mt-10 rounded-t-4xl bg-[#d3fd50] text-black'>
            <div className='flex w-full  gap-2  justify-between'>
                <div className='flex gap-2 lg:text-[3vw] text-[4vw]'>
                    <h2 className=' border-4 rounded-full px-5 lg:leading-none pt-2'>FB</h2>
                    <h2 className='border-4 rounded-full px-5 lg:leading-none pt-2'>IG</h2>
                    <h2 className=' border-4 rounded-full px-5 lg:leading-none pt-2'>IN</h2>
                    <h2 className='border-4 rounded-full px-5 lg:leading-none pt-2'>BE</h2>
                </div>
                <div>
                    <h1 className='text-[3vw] lg:flex md:flex hidden  border-4 rounded-full px-4 lg:leading-none pt-2 uppercase'>contact</h1>
                </div>
            </div>

            <h1 className='lg:text-[20vw] md:text-[30vw] text-[45vw] text-white leading-tight'>K72.</h1>

            <div className='flex gap-3 flex-wrap font-[font2] uppercase'>
                <p className='text-xl px-2 rounded-full py-1'>privacy policy.</p>
                <p className='text-xl px-2 rounded-full py-1'>Privacy Notice.</p>
                <p className='text-xl px-2 rounded-full  py-1'>Ethics Report.</p>
                <p className='text-xl px-2 rounded-full  py-1'>constant choices.</p>
            </div>
        </div>
    )
}

export default Footer