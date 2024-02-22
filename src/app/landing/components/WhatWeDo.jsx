import Image from 'next/image'
import image from "../../../../public/whatwedo.png"
const WhatWeDo = () => {
  return (
    <div className='flex justify-between items-center gap-10 flex-wrap py-40 mx-56'>
        <h1 className='text-[70px] bg-gradient-to-tr to-slate-700 from-white bg-clip-text text-transparent font-bold'>What We Do?</h1>
        <div>
            <Image src={image} alt='what we do' className='transform scale-125'/>
        </div>
    </div>
  )
}

export default WhatWeDo