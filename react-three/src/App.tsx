import React from "react";
import { Canvas } from '@react-three/fiber'
import Box from "./component/Box";

export default () => {
  return <>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-3, 0, 0]} />
      <Box position={[3, 0, 0]} />
    </Canvas>
  </>
}