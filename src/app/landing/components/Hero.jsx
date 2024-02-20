import React from "react";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ['latin'], 
weight: ['100', '300', '400', '700', '900']})


const Hero = () => {
  return (
    <div className={lato.className}>
      <div className="flex justify-center font-bold items-center py-40 w-full max-w-600px">
        <h1 className="herotext-gradient text-[70px] font-extrabold line uppercase">
          Crowdsourcing datasets
        </h1>
      </div>
    </div>
  );
};

export default Hero;