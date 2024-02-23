'use client'

import { useState, useRef,useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { TextureLoader } from 'three';

const Stars = (props) => {
  const ref = useRef();

  const [sphere] = useState(() => random.inSphere(new Float32Array(30), { radius: 1.2 }));

  const letterChoser = () => {
    const texture = new TextureLoader().load(`/letter${props.randomNumber}.png`);
    return texture;
  };

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });


  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          opacity={0.4}
          size={0.04}
          color="#02C27D"
          map={letterChoser()}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const totalStars = 13; // Number of stars

  return (
    <div className='flex items-center justify-center absolute z-10 bg-transparent'>
      <div className='lg:w-[96vw] md:w-[768px] w-[370px] sm:w-[390px] h-[99vh]'>
        <Canvas camera={{ position: [0, 0, 0] }}>
          <Suspense fallback={null}>
            {Array.from({ length: totalStars }, (_, i) => (
              <>
              <Stars key={i} randomNumber={i + 1} />
             </>
            ))}
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </div>
  );
};

export default StarsCanvas;
