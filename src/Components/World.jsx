import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import styled from 'styled-components'
import Lights from './World/Lights'
import ModelGltf from './World/ModelGltf'
import Primitives from './World/Primitives'
import Data from '../Data'
import { Perf } from 'r3f-perf'
import WorldUI from './WorldUI/WorldUI'
import World360 from './World/World360'
import Ui360 from './WorldUI/Ui360'
import RendersPopup from './WorldUI/RendersPopup'

const {models}=Data

const Container=styled.div`
    width: 100%;
    height: 100%;
`

export default function World() {

  const [levelToggle,setLevelToggle]=useState(true)
  const [roofToggle,setRoofToggle]=useState(true)
  const [toggle360,setToggle360]=useState(false)
  const [renderPopupState,setRenderPopupState]=useState(false)
  const [mapIndexState,setMapIndexState]=useState(0)
  
  return (
    <>
      {toggle360 ?
          <Ui360 mapIndexState={mapIndexState} setMapIndexState={setMapIndexState} toggle360={toggle360} setToggle360={setToggle360}/>
        :
          <WorldUI setRenderPopupState={setRenderPopupState} toggle360={toggle360} setToggle360={setToggle360} roofToggle={roofToggle} levelToggle={levelToggle} setLevelToggle={setLevelToggle}  setRoofToggle={setRoofToggle}/>
      }

      {renderPopupState && <RendersPopup setRenderPopupState={setRenderPopupState} renderPopupState={renderPopupState}/>}
        

      <Canvas camera={{fov:50, position:[-60,40,-60]}}>
        <Suspense>
          {/* <Perf /> */}
          {
            toggle360 ? 
            <OrbitControls minDistance={0} maxDistance={200} /> 
            : 
            <>
              <ModelGltf roofToggle={roofToggle} levelToggle={levelToggle} path={models.options.option1}/>
              <OrbitControls minDistance={20} maxDistance={200} />
            </>
          }
          <Lights />
          {/* <Primitives /> */}
          {toggle360 && 
            <>
              <World360 mapIndexState={mapIndexState} />
            </>
          }
        </Suspense>
    </Canvas>
    </>
  )
}
