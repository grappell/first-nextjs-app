import { Canvas } from "@react-three/fiber";
import React from 'react'
import { useGLTF } from '@react-three/drei'
import Model from "../public/3d-model/Osborne";


export default function Viewport (props) {
    return(
        <Canvas
        className="canvas"
        camera={{ position: [0, 3, 100] }}>
            <Model />
        </Canvas>
    //     <>
    //   <Canvas concurrent camera={{ position: [0, 3, 100] }}>
    //     <color attach="background" args={['black']} />
    //     <Suspense fallback={null}>
    //       <group position={[0, -1, 0]}>
    //         <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0.6]} scale={[0.26, 0.26, 0.26]} />
    //       </group>
    //       <ambientLight intensity={0.5} />
    //       <spotLight position={[0, 10, 0]} intensity={0.3} />
    //       <directionalLight position={[-20, 0, -10]} intensity={0.7} />
    //     </Suspense>
    //   </Canvas>
    // </>
    )
}

function Carla(props) {
  const { scene } = useGLTF('../public/3d-model/osbprne.glb')
  return <primitive object={scene} {...props} />
}




function Box(props) {
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial  color={"red"} />
    </mesh>
  );
}

function Floor(props) {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

function LightBulb(props) {
  return (
    <mesh {...props} >
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"}  />
    </mesh>
  );
}

