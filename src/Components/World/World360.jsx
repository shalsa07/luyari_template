import { useTexture } from '@react-three/drei'
import React from 'react'
import { BackSide } from 'three'
import { degToRad } from 'three/src/math/MathUtils'
import Data from '../../Data'

const {map360}=Data

export default function World360({toggle360,setToggle360,mapIndexState}) {

    const map=useTexture(map360[mapIndexState])

  return (
    <>
        <mesh rotation={[0,degToRad(315),0]}>
            <sphereGeometry args={[300,32,32]}/>
            <meshBasicMaterial map={map} side={BackSide}/>
        </mesh>
    </>
  )
}
