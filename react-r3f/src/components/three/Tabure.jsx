import React, { useRef, useContext, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { ConfiguratorContext } from '../ConfiguratorContext'
import { useFrame, useThree } from '@react-three/fiber'
import { degToRad } from 'three/src/math/MathUtils'

const modelPath = "/models/tabure3.glb"

export function Tabure(props) {

  const { invalidate, setFrameloop } = useThree()
  const { nodes, materials } = useGLTF(modelPath)
  const groupRef = useRef()
  const cusionRef = useRef()
  const buttonRef = useRef()
  const {configProps, setConfigProps} = useContext(ConfiguratorContext)
  
  useEffect(()=>{
    console.log("change to "+ configProps.colour)
    cusionRef.current.material.color.setHex(configProps.colour)
    buttonRef.current.material.color.setHex(configProps.colour)
    invalidate()
  }, [configProps.colour])

  
  useEffect(()=>{
    if(configProps.rotate){
      setFrameloop('always')
    } else {
      setFrameloop('demand')
      invalidate()
      
    }
  }, [configProps.rotate])
  
  useFrame((state, delta)=>{
    if(configProps.rotate){
      groupRef.current.rotation.y += delta * degToRad(15)
    }
  })

  return (
    <group dispose={null} ref={groupRef} rotateY={1/6*Math.PI} position={[0, 0.15, 0]}>
      <mesh
        geometry={nodes.base.geometry}
        material={materials.base_material}>
        <group position={[0, 0.153, 0]}>
          <mesh
            ref={cusionRef}
            geometry={nodes.Sphere.geometry}
            material={materials.cusion_material}
          />
          <mesh
            ref={buttonRef}
            geometry={nodes.Sphere_1.geometry}
            material={materials.button_material}
          />
        </group>
      </mesh>
      { configProps.fourLegs ?
        <group name='four-legs'>      
          <mesh
            geometry={nodes.leg41.geometry}
            material={materials.leg_material}
            position={[-0.211, -0.342, 0.066]}
            rotation={[0, 0.304, 0]}
          />
          <mesh
            geometry={nodes.leg43.geometry}
            material={materials.leg_material}
            position={[0.211, -0.342, -0.066]}
            rotation={[Math.PI, -0.304, Math.PI]}
          />
          <mesh
            geometry={nodes.leg44.geometry}
            material={materials.leg_material}
            position={[0.066, -0.342, 0.211]}
            rotation={[-Math.PI, 1.267, -Math.PI]}
          />
          <mesh
            geometry={nodes.leg42.geometry}
            material={materials.leg_material}
            position={[-0.066, -0.342, -0.211]}
            rotation={[0, -1.267, 0]}
          />
        </group> 
      :
        <group name='three-legs'>        
          <mesh
            geometry={nodes.leg31.geometry}
            material={materials.leg_material}
            position={[-0.191, -0.342, 0.111]}
            rotation={[0, 0.525, 0]}
          />
          <mesh
            geometry={nodes.leg32.geometry}
            material={materials.leg_material}
            position={[0, -0.342, -0.221]}
            rotation={[0, -1.569, 0]}
          />
          <mesh
            geometry={nodes.leg33.geometry}
            material={materials.leg_material}
            position={[0.191, -0.342, 0.11]}
            rotation={[-Math.PI, 0.522, -Math.PI]}
          />
        </group>
    }
    </group>
  )
}

useGLTF.preload(modelPath)
