import React from 'react'

const Sec2text = () => {
  return (
    <>
     <div className='flex lg:py-20 py-10  w-full'>
          <div className='w-1/2'>
            <p>expertise</p>
          </div>
          <div className='w-1/2'>
            <p>advertizing</p>
            <p>branding</p>
            <p>design</p>
            <p>content</p>
            <p>strategy</p>
          </div>
        </div>

        <div className='w-full lg:flex lg:flex-row py-10 md:flex md:flex-row flex flex-col gap-15 '>
          <p className='lg:w-1/3 md:w-1/3 w-full'>Our Work Born in curiosity, raised by dedication and fed with a steady diet of creativity.</p>
          <p className='lg:w-1/3 md:w-1/3 w-full'>Our Creative  Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</p>
          <p className='lg:w-1/3 md:w-1/3 w-full'>Our Culture We’re open to each other. Period. The team works together to create a space that makes us proud.</p>
        </div>
    </>
  )
}

export default Sec2text