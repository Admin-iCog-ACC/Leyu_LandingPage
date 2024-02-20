'use client'

import { useState, useRef,useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { TextureLoader } from 'three';

const Stars = (props) => {
  const ref = useRef();

  const [sphere] = useState(() => random.inSphere(new Float32Array(1000), { radius: 1.2 }));

  const [randomNumber, setRandomNumber] = useState(1);

  const letterChoser = () => {
    const texture = new TextureLoader().load(`/letter${randomNumber}.png`);
    return texture;
  };

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 7) + 1;
      setRandomNumber(newRandomNumber);
    }, 2000); // Change the letter every 2 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          opacity={1}
          size={0.04}
          color="#02C27D"
          map={letterChoser()}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='min-h-screen flex items-center justify-center absolute -z-10 bg-black'>
      <div className=' w-screen h-screen'>
        <Canvas camera={{ position: [0, 0, 0] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </div>
  );
};

export default StarsCanvas;
