import React from "react";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* <div className="flex  justify-center items-center">
        <div className="absolute left-0  transform -rotate-90 w-[50%] h-full bg-black opacity-70 bg-hero-gradient"></div>
      </div>
      <div className="flex  justify-center items-center">
        <div className="absolute right-0  transform rotate-90 w-[50%] h-full bg-black opacity-70 bg-hero-gradient"></div>
      </div> */}

      <div className={`z-10 `}>
        <div className="flex flex-col justify-center font-bold items-center py-40 w-full mx-auto max-w-[90%] md:max-w-[100%]">
          <h1 className="herotext-gradient lg:text-[70px] text-[39px] font-extrabold uppercase">
            Crowdsourcing datasets
          </h1>
          <h2 className="pt-5 text-white lg:text-[36px]  text-center font-normal">
            for low-resource languages across Africa <br /> Fueling innovation
            tailored to local challenges/needs!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;