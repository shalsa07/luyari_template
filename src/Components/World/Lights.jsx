import React from 'react'

export default function Lights() {
  return (
    <>
        <directionalLight position={[60,20,-60]}/>
        <ambientLight />
    </>
  )
}
