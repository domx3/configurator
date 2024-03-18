import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { degToRad } from 'three/src/math/MathUtils'

function Box() {

  const groupRef = useRef()

  useFrame((state, delta)=>{
    groupRef.current.rotation.y += delta * degToRad(30)
  })

  return (
  <group ref={groupRef}>
    <mesh position={[3,2,0]} >
      <boxGeometry />
      <meshPhongMaterial color="#FF9933" opacity={0.9}/>
    </mesh>
  </group>
  )
}

export default Box