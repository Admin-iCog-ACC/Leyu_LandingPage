import React from "react";
import StarsCanvas from "./canvas/Stars";
import Navbar from "./components/Navbar";
import BallCanvas from "./canvas/Ball";
import letters from "../../constants/letters.js";
import Image from "next/image";
import ComputersCanvas from "./canvas/Computer";

import Hero from "./components/Hero";

import WhyLeyu from "./components/WhyLeyu";


const Page = () => {
  return (
    <div className="text-center min-h-dvh bg-transparent">
      <StarsCanvas />
      <Navbar />

      <Hero />

      <WhyLeyu />
    </div>
  );
};

export default Page;
