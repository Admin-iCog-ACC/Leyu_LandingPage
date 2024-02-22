import React from 'react'


const DiamondContainer = () => 
(
  <div className='diamond-container w-32 h-32 border-r-4 border-b-4 border-t-2 border-l-2 shadow-2xl shadow-violet-600 border-violet-900 bg-[#303030]' >
       
  </div>
)
const SquareContainer = () => 
(
  <div className='w-32 h-32  bg-[#303030]' >
       
  </div>
)

const Teams = () => {
  return (
    <div className=''>
    <div className='pt-20'>
        <h1 className='text-[30px] bg-gradient-to-tr from-slate-700 to-white bg-clip-text text-transparent'>A Team <span className='text-[40px] font-bold'>Passionate</span> about <span className='text-[40px] font-bold'>Inclusive AI</span></h1>
    <div className='flex flex-wrap justify-center items-center h-96 gap-20'>
    <div className='text-[55px] herotext-gradient font-bold text-center'>
            Our Team
        </div>
    <div className='w-2/3 flex flex-wrap gap-44 justify-center items-center'>
        <DiamondContainer/>
        <div className='lg:mt-32'>
        <DiamondContainer/>
        </div>
        <DiamondContainer/>

    </div>
    </div>
    </div>
    <div className='pt-20'>
    <div className='flex flex-wrap justify-center items-center h-96 gap-20'>
    <div className='text-[55px] text-white font-bold text-center'>
            Our Partners
    </div>
    <div className='w-2/3 flex flex-wrap gap-44 justify-center items-center'>
        <SquareContainer/>
        <SquareContainer/>
        <SquareContainer/>

    </div>
    </div>
    </div>

    </div>
  )
}

export default Teams