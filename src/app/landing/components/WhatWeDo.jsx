import Image from 'next/image'
import image from "../../../../public/whatwedo.svg"
const WhatWeDo = () => {
  return (
    <div className='flex justify-evenly items-center gap-10 flex-wrap py-40'>
        <h1 className='text-[70px] bg-gradient-to-tr to-slate-700 from-white bg-clip-text text-transparent font-bold'>What We Do?</h1>
        <div className=''>
            <Image src={image} alt='what we do' className=''/>
        </div>
    </div>
  )
}

export default WhatWeDo