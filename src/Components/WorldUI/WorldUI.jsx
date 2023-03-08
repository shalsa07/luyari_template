import React, { useRef } from 'react'
import styled from 'styled-components'
import Data from '../../Data'

const {ui}=Data

// console.log(Data);

const TopMenu=styled.div`
    position: fixed;
    top: 0;left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    background-color: ${ui.menuColor};
    z-index: 10;
    border-radius: 0 0 40px 40px;
`

const RightMenu=styled.div`
    transform-origin: center right;
    position: fixed;
    right: 0;top: 50%;
    transform: translateY(-50%);
    width: 80px;
    height: auto;
    background-color: ${ui.menuColor};
    z-index: 10;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 50;

    @media screen and (max-width:420px){
        width: 60px;
        border-radius: 40px;
    }

            
    @media screen and (max-height:520px){
        width: 60px;
        border-radius: 40px;
    }
`

const BottomMenu=styled.div`
    transform-origin: center left;
    padding-left: 10px;
    position: fixed;
    left: 0;bottom: 0;
    width: 100%;
    height: 120px;
    background-color: black;
    z-index: 10;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background:linear-gradient(0deg, ${ui.menuColor}, ${ui.menuColor} 70%, #00000000);
        
    @media screen and (max-width:420px){
        padding-left: 20px;
        height: 60px;
    }
        
    @media screen and (max-height:520px){
        padding-left: 20px;
        height: 60px;
    }
`

const Btn=styled.div`
    height: 80px;
    width: 40px;
    margin: 30px 20px 0 20px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    /* overflow: hidden;    */
    cursor: pointer; 
    
    @media screen and (max-width:420px){
        width: 20px;
        height: 40px;
        margin: 10px 20px 0 20px;
    }

            
    @media screen and (max-height:520px){
        width: 20px;
        height: 40px;
        margin: 20px 20px 0 20px;
    }
`

    const BtnImg=styled.img`
        flex: 2;
        object-fit: contain;
        border-radius: 50%;

        :hover{
            background-color: grey;
        }
    `

    const BtnText=styled.p`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        line-height: 10px;
        flex: 1;
        text-transform: uppercase;
        margin-bottom: 20px;
            
        @media screen and (max-width:420px){
            font-size: 7px;
        }

                
        @media screen and (max-height:520px){
            font-size: 7px;
        }
    `

    const BtnHome=styled.img`
        /* flex: 1; */
        width: 60px;
        height: 60px;
        object-fit: contain;
        border-radius: 50%;

        :hover{
            background-color: grey;
        }
                    
        @media screen and (max-width:420px){
            width: 40px;
            height: 40px;
        }
                    
        @media screen and (max-height:520px){
            width: 40px;
            height: 40px;
        }
    `

    const MenuImg=styled.img`
        /* flex: 1; */
        width: 100px;
        height: 60px;
        object-fit: contain;
        border-radius: 50%;
                    
        @media screen and (max-width:420px){
            width: 85px;
            height: 50px;
        }
                    
        @media screen and (max-height:520px){
            width: 85px;
            height: 50px;
        }
    `

    const Line=styled.div`
        width: 1px;
        height: 35px;
        background-color: white;
    `

    const BottomText=styled.p`
        padding-left: 30px;
        font-size: 14px;
        color: white;

        @media screen and (max-width:420px){
            padding-left: 15px;
        }

                
        @media screen and (max-height:520px){
            padding-left: 15px;
        }
    `

const ImgContainer=styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

               
    @media screen and (max-width:420px){
        width:30px;
    }

            
    @media screen and (max-height:520px){
        width:30px;
    }
`

export default function WorldUI({setRenderPopupState,toggle360, setToggle360, setLevelToggle, setRoofToggle, roofToggle}) {

    const refBtnLevel=useRef()
    const refBtn360s=useRef()

    const openRenderPopup=()=>{
        setRenderPopupState(true)
    }

    const toggleLevels=()=>{
        if(roofToggle){
            setRoofToggle(false)
        }
        // else if(levelToggle && !roofToggle){
        //     setLevelToggle(false)
        // }
        else{
            setLevelToggle(true)
            setRoofToggle(true)
        }
    }

    const toggling360=()=>{
        if(!toggle360){
            setToggle360(true)
        }
        else{
            setToggle360(false)
        }
    }

  return (
    <>

        <RightMenu> 

            <Btn onClick={openRenderPopup}>
                <BtnImg style={{color:'white'}} src={ui.icons.right.ar}/>
                <BtnText>
                    ar
                </BtnText>
            </Btn>

            <Btn onClick={openRenderPopup}>
                <BtnImg style={{color:'white'}} src={ui.icons.right.render}/>
                <BtnText>
                    renders
                </BtnText>
            </Btn>

            <Btn onClick={toggleLevels}>
                <BtnImg src={ui.icons.right.levels}/>
                <BtnText>
                    levels
                </BtnText>
            </Btn>

            <Btn style={{marginBottom:'10px'}} onClick={toggling360} ref={refBtn360s}>
                <BtnImg src={ui.icons.right.icons360}/>
                <BtnText>
                    360s
                </BtnText>
            </Btn> 

        </RightMenu>

        <BottomMenu>

            <BtnHome src={ui.icons.home}/>

            <Line />

            <BottomText>
                EXTERIROR
            </BottomText>

            <Btn>
                <BtnImg src={ui.icons.bottom.exterior.driveway}/>
                <BtnText>
                    driveway
                </BtnText>
            </Btn>

            <Line />

            <BottomText>
                INTERIOR
            </BottomText>

            <Btn>
                <BtnImg src={ui.icons.bottom.interior.foyer}/>
                <BtnText>
                    bedroom
                </BtnText>
            </Btn>
            
        </BottomMenu>
    </>

  )
}
