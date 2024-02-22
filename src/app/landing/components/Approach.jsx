import React from 'react'
import Image from 'next/image'
import icon from "../../../../public/value_icon.svg"


  const Approach = (props) => (
     <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl text-white font-semibold'>{props.title}</h1>

        <div className='flex mt-2'>
           <Image src={icon} width={50} height={50} alt='icon' className='max-lg:hidden'/>
            <h1 className='ml-3 text-lg text-pretty text-left text-white font-normal'>{props.description}</h1>
        </div>
        
    </div>
  )

const Approaches = () => {
  return (
    <div className='flex justify-center gap-x-20 gap- items-center flex-wrap text-center py-20 text-white'>
        <div className='text-[70px] herotext-gradient font-bold text-center'>
            Our Approach
        </div>

        <div className=' lg:w-2/3 grid grid-cols-2 max-lg:grid-cols-1 table-column gap-x-14 gap-y-16 mt-10'>
            <Approach title = {"Crowed Sourcing"} description = {"Diverse and high-quality data for reliable AI performance."}/>
            <Approach title = {"Segmented Data"} description = {"Accessible and cost-effective solutions for various sectors."}/>
            <Approach title = {"Hybrid Labeling"} description = {"Solutions addressing societal challenges in agriculture, health, education and beyond."}/>
            <Approach title = {"Data Privacy &  Ethics"} description = {"Collaborative approach to bring positive transformation."}/>
            <Approach title = {"Data Privacy &  Ethics"} description = {"Collaborative approach to bring positive transformation."}/>

        </div>

    </div>
  )
}

export default Approaches