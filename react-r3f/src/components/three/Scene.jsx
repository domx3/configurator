import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import { Tabure } from './tabure'

function Scene() {

  const cameraControlsRef = useRef()

  return (
    <>
      <Canvas
        frameloop='always'
        camera={{ fov:45, near: 0.1, far:100, position: [0,0.5,2.5]}}
        //shadows
        //flat linear
      >
        {/* <Environment preset='city' background blur={1} /> */}
        <CameraControls ref={cameraControlsRef} 
          minDistance={1}
          maxDistance={4}
        />

        {/* <Monkey /> */}
        <Tabure />
        <ambientLight intensity={1} />
        <spotLight position={[0, 20, 5]} decay={0} distance={45} penumbra={1} intensity={5} />
        <spotLight position={[0, -20, -5]} decay={0} distance={45} penumbra={1} intensity={5} />
      
      
      </Canvas>

      
    </>
  )
}

export default Scene