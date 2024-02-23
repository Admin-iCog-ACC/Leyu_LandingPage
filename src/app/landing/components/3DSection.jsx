'use client'

import React from 'react'
import EarthCanvas from '../canvas/Earth';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/motion'
const ThreeDSection = () => {
   return (
    <div className={` xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}>
         <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.75] self-center p-8 rounded-2xl'>
        <p className='text-white text-left leading-loose text-2xl max-lg:text-xl spacing' >We offer sector-specific language datasets meticulously 
            crafted for critical industries such as agriculture,
             health, and education. These datasets provide invaluable
              insights that fuel innovation, enhance efficiency, 
              and inform better decision-making processes.</p>
      </motion.div>
    </div>
  );
}

export default ThreeDSection