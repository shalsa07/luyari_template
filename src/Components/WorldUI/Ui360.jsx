import React from 'react'
import styled from 'styled-components'
import Data from '../../Data'

const {ui,map360}=Data

const BtnClose=styled.div`
  position: fixed;
  left: 50%;top: 0;
  width: 60px;
  border-radius: 0 0 40px 40px;
  height: auto;
  transform: translateX(-50%);
  background-color: #000000;
  z-index: 100;
  padding: 7.5px;

  :hover{
    cursor: pointer;
  }
`

const ArrowLeft=styled.div`
  position: fixed;
  top: 50%;left: 0;
  width: 80px;
  height: auto;
  color: white;
  transform: translateY(-50%);
  color: red;
  z-index: 100;

  :hover{
    cursor: pointer;
  }
`

const ArrowRight=styled.div`
  position: fixed;
  top: 50%;right: 0;
  width: 80px;
  height: auto;
  color: white;
  transform: translateY(-50%);
  color: red;
  z-index: 100;

  :hover{
    cursor: pointer;
  }
`

const ImgContainer=styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* color: white; */
`
export default function Ui360({toggle360,setToggle360,setMapIndexState,mapIndexState}) {

    const mapNumer=map360.length
    let mapNumerCount=mapIndexState

    const toggling360=()=>{
      if(toggle360){
          setToggle360(false)
      }
      else{
          setToggle360(true)
      }
    }

    const arrowLeft360=()=>{
      if(mapNumerCount > 0){
        mapNumerCount --
      }else{
        mapNumerCount=mapNumer-1
      }
      setMapIndexState(mapNumerCount)
    }

    const arrowRight360=()=>{
      if(mapNumerCount < mapNumer-1){
        mapNumerCount ++
      }else{
        mapNumerCount=0
      }
      setMapIndexState(mapNumerCount)
    }

  return (
    <>
        <BtnClose onClick={toggling360}>
          <ImgContainer src={ui.icons.close}/>
        </BtnClose>

        <ArrowLeft onClick={arrowLeft360}>
          <ImgContainer src={ui.icons.back}/>
        </ArrowLeft>

        <ArrowRight onClick={arrowRight360}>
          <ImgContainer src={ui.icons.next}/>
        </ArrowRight>
    </>
  )
}
