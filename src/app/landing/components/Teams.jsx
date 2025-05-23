import Image from 'next/image';
import icogLabs from '../../../../public/icog-labs.png'
import singularitynet from '../../../../public/singularitynet.svg'
import icogacc from '../../../../public/icogwhite.png'


const DiamondContainer = () => 
(
  <div className='diamond-container w-32 h-32 border-r-4 border-b-4 border-t-2 border-l-2 shadow-2xl shadow-violet-600 border-violet-900 bg-[#303030]' >
       
  </div>
)
const SquareContainer = (props) => 
(
  <div className=' self-center shadow-card bg-flex justify-center items-center' >
       <img src={props.image.src} alt='partner_image' width={250} height={250} className=''/>
  </div>
)

const Teams = () => {
  return (
    <div className='px-10'>
    {/* <div className='pt-20'>
        <h1 className='text-[30px] bg-gradient-to-tr from-slate-700 to-white bg-clip-text text-transparent'>A Team <span className='text-[40px] font-bold'>Passionate</span> about <span className='text-[40px] font-bold'>Inclusive AI</span></h1>
    <div className='flex flex-wrap justify-center items-center min-h-96 gap-20'>
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
    </div> */}
    <div className=''>
    <div className='flex flex-wrap justify-center items-center min-h-96'>
    <div className='w-full grid grid-cols-3 place-items-center self-center gap-20'>
      <div className='img-white'>
        <SquareContainer image = {icogacc}/>
      </div>
        <SquareContainer image = {icogLabs} className = ""/>
        <SquareContainer image = {singularitynet} />
    </div>
    </div>
    </div>

    <div className='text-center flex flex-col gap-y-4 text-lg justify-center items-center text-[#21A0C8] py-10 bg-black'>
      <h1>
        Join us in bridging the AI gap and driving meaningful change in Ethiopia and across Africa.
      </h1>
      <button className='bg-[#095FAF] py-2 px-5 text-white font-bold'>
          Get In Touch
      </button>
        

    </div>

    </div>
  )
}

export default Teams