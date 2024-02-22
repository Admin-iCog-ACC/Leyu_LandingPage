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

const Page = () => {
  return (
    <div className="text-center min-h-dvh bg-black">
      <StarsCanvas />
      <div className="h-screen">
        <Navbar />
        <Hero />
      </div>
      <Computer />
      <WhyLeyu />
      <WhatWeDo />
      <Values />
    </div>
  );
};

export default Page;
