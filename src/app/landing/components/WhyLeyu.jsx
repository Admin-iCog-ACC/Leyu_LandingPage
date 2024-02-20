'use client'

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {fadeIn} from "../../utils/motion"

    const services = [
        {
            index:1,
          title:"Inclusive datasets",
          description: "We move beyond generic datasets, offering accurate data in Amharic, Oromiffa, and Tigrigna."
        },
        {
             index:2,
          title:"Empowers local annotators",
          description: "Through a crowdsourcing platform, Leyu empowers local annotators, especially women and youth to contribute their voices particularly in AI."
        },
        {
             index:3,
          title:"Ethical data use ",
          description: "We champion ethical data use and fair compensation to fuel local innovation designed for local challenges."
        },
        {
             index:4,
          title:"Language",
          description: "Preserving and Amplifying Ethiopian Voices by collecting data in their native languages, ensuring their voices are heard and reflected in dataset development."
        },
         ]
    const ServiceCard = ({ index, title, description }) => (
  <Tilt className='w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=' w-[26rem] green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-slate-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <h3 className='text-white text-[22px] font-bold text-center'>
          {title}
        </h3>
        <h3 className='text-white text-[15px] text-center'>
          {description}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const WhyLeyu = () => {

  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-gray-950 pt-5">
        <div class=" text-4xl bg-gradient-to-tr from-slate-700 to-white bg-clip-text text-transparent font-extrabold">Why Leyu?</div>
        <div className='mt-20 grid grid-cols-2 max-[910px]:grid-cols-1 gap-x-64 gap-y-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default WhyLeyu