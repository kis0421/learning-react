import React, { useRef, useState } from "react";
import { useFrame } from '@react-three/fiber'

const Box = (props: JSX.IntrinsicElements['mesh']) => {
    const ref: any = useRef(null!);
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);

    useFrame(() => {

        ref.current.rotation.x += Math.random() * 0.03;
        ref.current.rotation.y += Math.random() * 0.03;
    });

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={() => click(!clicked)}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}
export default Box