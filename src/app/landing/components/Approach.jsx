import React from 'react'
import Image from 'next/image'
import icon from "../../../../public/value_icon.svg"


  const Approach = (props) => (
     <div className='flex flex-col justify-center'>
        <h1 className='text-2xl text-white font-bold lg:self-start lg:ml-[3.8rem]'>{props.title}</h1>

        <div className='flex mt-2'>
           <Image src={icon} width={50} height={50} alt='icon' className='max-lg:hidden'/>
            <h1 className='ml-3 text-pretty md:text-left text-center text-white font-normal'>{props.description}</h1>
        </div>
        
    </div>
  )

const Approaches = () => {
  return (
    <div className='flex justify-center gap-x-20 items-center flex-wrap text-center py-20 text-white'>
        <div className='text-[70px] herotext-gradient font-bold text-center'>
            Our Approach
        </div>

        <div className=' lg:w-2/3 grid grid-cols-2 max-lg:grid-cols-1 gap-x-14 gap-y-16 mt-10'>
            <Approach title = {"Crowdsourcing"} description = {"Collecting data from local annotators, ensuring cultural accuracy and diverse datasets."}/>
            <Approach title = {"Fair Wages & Compensation"} description = {"Ensuring fair wages and compensations to micro workers is a fundamental pillar of our approach."}/>
            <Approach title = {"Hybrid Labeling"} description = {"Combining human and automated labeling for accurate datasets."}/>
            <Approach title = {"Segmented Data"} description = {"Creating distinct training, validation, and test sets for LLMs, enhancing adaptability across sectors."}/>
            <Approach title = {"Data Privacy &  Ethics"} description = {"Ensuring ethical dataset through legal compliance and data ownership respect."}/>
            <Approach title = {"Social Impact"} description = {"Creating micro-work opportunities for youth and women."}/>
            <Approach title = {"Marketplace"} description = {"Providing a platform for companies to purchase datasets, facilitating access to high-quality data."}/>
        </div>

    </div>
  )
}

export default Approaches