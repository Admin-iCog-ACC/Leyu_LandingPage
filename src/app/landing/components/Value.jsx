import React from 'react'
import icon from "../../../../public/value_icon.svg"
import Image from 'next/image'

  const Value = (props) => (
     <div className='flex flex-col justify-center max-lg:items-center'>
        <h1 className='text-2xl text-white font-bold lg:self-start lg:ml-12'>{props.title}</h1>

        <div className='flex mt-2'>
           <Image src={icon} width={35} height={35} alt='icon' className='max-lg:hidden'/>
            <h1 className='ml-3 lg:text-left max-lg:text-center text-white font-normal'>{props.description}</h1>
        </div>
        
    </div>
  )

const Values = () => {
  return (
    <div className='flex justify-evenly px-16 gap-x-20 items-center flex-wrap text-center py-20 bg-[#095FAF1A] text-white'>
        <div className='lg:text-[70px] text-[50px] lg:pl-1  herotext-gradient font-bold text-center'>
            Our Values
        </div>

        <div className='lg:w-2/3 grid grid-cols-2 max-lg:grid-cols-1 gap-x-14 lg:gap-y-32 gap-y-16 mt-10'>
            <Value title = {"Data Quality and Accuracy"} description = {"Diverse and high-quality data for reliable AI performance."}/>
            <Value title = {"Accessibility"} description = {"Accessible and cost-effective solutions for various sectors."}/>
            <Value title = {"Impact"} description = {"Solutions addressing societal challenges in agriculture, health, education and beyond."}/>
            <Value title = {"Collaboration and Partnership"} description = {"Collaborative approach to bring positive transformation."}/>

        </div>

    </div>
  )
}

export default Values