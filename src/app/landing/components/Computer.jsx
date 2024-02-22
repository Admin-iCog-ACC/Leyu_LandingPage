import React from 'react'
import computer from "../../../../public/computer.png"
import laptop from "../../../../public/laptop.png"
import laptopVideo from "../../../../public/pcVideo.gif"

import phone from "../../../../public/phone.png"

import Image from 'next/image'

const Computer = () => {
  return (
    // <div className='w-full flex items-center justify-around bg-gray-950'>
    //   <Image src={computer} alt="Computador" className='scale-75'/>
    // </div>
   
  <div className="h-screen flex justify-center items-center pt-10">
    <div className=' z-10 w-2/3 relative'>
        <Image src={laptop} alt="Computador" className='lg:h-[30rem] h-auto  lg:object-contain block' />
                <Image src={laptopVideo} alt="Computador" className='-top-3 left-80 absolute lg:h-[30rem] h-auto lg:w-[39rem]  lg:object-contain block' />
        <Image src={phone} alt="Computador" className='absolute md:h-[25rem] h-auto w-2/3 max-md:w-1/2 object-contain -right-48 max-md:-right-20 top-28'/>
    </div>    
  </div>
  )
}

export default Computer