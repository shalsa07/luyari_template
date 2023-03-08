import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Data from '../../Data'

const {ui,renderImgs}=Data

const Container=styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${ui.popupColor};
    z-index: 100;
`

const ImgContainer=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgWrapper=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    transform: translateX(200);
    justify-content: center;
    align-items: center;
    transition: all 1s ease;
`

const ArrowLeft=styled.div`
    position: fixed;
    left: 0;top: 50%;
    transform: translateY(-50%);
    width: 80px;
    height: auto;
    z-index: 100;

    :hover{
        cursor: pointer;
    }
`

const ArrowRight=styled.div`
    position: fixed;
    right: 0;top: 50%;
    transform: translateY(-50%);
    width: 80px;
    height: auto;
    z-index: 100;
        
    :hover{
        cursor: pointer;
    }
`

const BtnClose=styled.div`
  position: fixed;
  left: 50%;top: 0;
  width: 60px;
  height: auto;
  transform: translateX(-50%);
  background-color: black;
  border-radius: 0 0 40px 40px;
  z-index: 100;
  padding: 7.5px;

  :hover{
    cursor: pointer;
  }
`

const Img=styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`

const BtnImg=styled.img`
    /* flex: 1; */
    width: 100%;
    height: auto;
    object-fit: cover;
    /* border-radius: 50%; */
    /* cursor: pointer;

    :hover{
        color: black;
    } */
`

export default function RendersPopup({renderPopupState,setRenderPopupState}) {

    const [imgState,setImageState]=useState()
    const refImgWrapper=useRef()
    const refArrowLeft=useRef()
    const refArrowRight=useRef()
    useEffect(()=>{
        const arrowLeft=refArrowLeft.current
        const arrowRight=refArrowRight.current
        const imgWrapper=refImgWrapper.current
        const imgLength=imgWrapper.children.length
        let imgContainerWidth=imgWrapper.clientWidth
        let imgCount=0
    
        arrowLeft.addEventListener('click',()=>{
            if(imgCount<=0){
                imgCount=imgLength-1
                imgWrapper.style.transform=`translateX(-${imgContainerWidth * imgCount}px)`
            }else{
                imgCount--
                imgWrapper.style.transform=`translateX(-${imgContainerWidth * imgCount}px)`
            }
            console.log('left clicked',imgCount);
        })

        arrowRight.addEventListener('click',()=>{
            if(imgCount<imgLength-1){
                imgCount++
                imgWrapper.style.transform=`translateX(-${imgContainerWidth * imgCount}px)`
            }else{
                imgCount=0
                imgWrapper.style.transform=`translateX(-${imgContainerWidth * imgCount}px)`
            }
            console.log('right clicked',imgCount);
        })

        // console.log(imgLength,imgCount)
    },[])

    const closeRenderPopup=()=>{
        setRenderPopupState(false)
    }



  return (
    <Container>
        <BtnClose onClick={closeRenderPopup}>
            <BtnImg src={ui.icons.popups.close}/>
        </BtnClose>

        <ArrowLeft ref={refArrowLeft}>
            <BtnImg src={ui.icons.popups.back}/>
        </ArrowLeft>

        <ArrowRight ref={refArrowRight}>
            <BtnImg src={ui.icons.popups.next}/>
        </ArrowRight>

        <ImgContainer>
            <ImgWrapper ref={refImgWrapper}>
                {renderImgs.map((item,index) =><Img key={index} src={item}/>)}
            </ImgWrapper>
        </ImgContainer>
    </Container>
  )
}
