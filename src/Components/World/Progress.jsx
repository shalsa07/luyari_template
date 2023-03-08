import { useProgress } from '@react-three/drei'
import React from 'react'

export default function Progress() {

    const {progress,items,total,loaded}=useProgress()

  return (
    <div>Progress</div>
  )
}
