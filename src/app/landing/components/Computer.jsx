import React from 'react'

import tabVideo from "../../../../public/tab-video.gif"
import tab from "../../../../public/tab.png"

import phoneVideo from "../../../../public/phone-video.gif"
import phone from "../../../../public/phone.png"



import Image from 'next/image'

const Computer = () => {
  return (
    // <div className='w-full flex items-center justify-around bg-gray-950'>
    //   <Image src={computer} alt="Computador" className='scale-75'/>
    // </div>
   
  <div className="flex-wrap px-10 h-auto z-20 gap-0 gap-y-20 flex justify-center items-center pt-10">
        <div className='group'>
        <Image src={tabVideo} alt='tab video' className=' rounded-3xl hidden group-hover:block'/>
        <Image src={tab} alt='tab' className='rounded-3xl group-hover:hidden'/>
        </div>
        <div className='group self-end'>
        <Image src={phone} alt='phone' className=' rounded-3xl group-hover:hidden'/>
        <Image src={phoneVideo} alt='phone video' className=' rounded-3xl hidden group-hover:block'/>
        </div>
  </div>
  )
}

export default Computer