import React from "react";
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import Box from "./component/Box";

export default () => {
  return <>
    <Canvas style={{ position: 'absolute', left: 0, top: 0, }}>
      <Stars factor={10} radius={50}/>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-3, 0, 0]} />
      <Box position={[3, 0, 0]} />
    </Canvas>
  </>
}