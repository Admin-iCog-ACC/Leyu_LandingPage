import React from "react";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-[80vh]">
    <div className="absolute left-0 w-[13%] h-1/4" style={{backgroundImage: 'radial-gradient(circle, rgba(47, 129, 174, 0.55))'}} />
    <div className="absolute right-0 w-[13%] h-1/4" style={{backgroundImage: 'radial-gradient(circle, rgba(92, 62, 188, 0.55), transparent)'}} />
    <div className={`z-10 `}>
      <div className="flex flex-col justify-center font-bold items-center py-40 w-full max-w-600px">
        <h1 className="herotext-gradient text-[70px] font-extrabold uppercase">
          Crowdsourcing datasets
        </h1>
        <h2 className="pt-5 text-white text-[36px] text-center font-normal">
          for low-resource languages across Africa <br/> Fueling innovation tailored
          to local challenges/needs!
        </h2>
      </div>
    </div>
  </div>
  );
};

export default Hero;