import React from "react";
import StarsCanvas from "./canvas/Stars";
import Navbar from "./components/Navbar";
import BallCanvas from "./canvas/Ball";
import letters from "../../constants/letters.js";
import Image from "next/image";
import ComputersCanvas from "./canvas/Computer";

import Hero from "./components/Hero";

import WhyLeyu from "./components/WhyLeyu";
import Computer from "./components/Computer";
import WhatWeDo from "./components/WhatWeDo";
import Values from "./components/Value";
import Teams from "./components/Teams";
import Approaches from "./components/Approach";

const Page = () => {
  return (
    <div className="text-center bg-[#090909]">
      <StarsCanvas />
      <div className="h-screen">
        <Navbar />
        <Hero />
      </div>
      <Computer />
      <Approaches />
      <WhyLeyu />
      <WhatWeDo />
      <Values />
      <Teams />
    </div>
  );
};

export default Page;
