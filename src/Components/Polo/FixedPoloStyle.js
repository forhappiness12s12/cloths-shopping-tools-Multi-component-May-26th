
import React, { useState,useEffect } from "react";
import { StyleContext } from "./StyleProviderPolo";
import { useContext } from "react";
import { Tooltip } from 'react-tooltip'
import halfpointedright from './stylepic/half-pointed-right.png'
import halfpointedleft from './stylepic/half-pointed-left.png'
import pointedflapright from './stylepic/half-pointed-right.png'
import pointedflapleft from './stylepic/half-pointed-left.png'
import standardflapright from './stylepic/standard-flap-right.png'
import standardflapleft from './stylepic/standard-flap-left.png'
import nopocket from './stylepic/no-pocket.PNG'
import ticketpointhor from './stylepic/ticket-pocket-left.PNG'
import ticketpointver from './stylepic/ticket-pocket-vertical.PNG'
import bottomvent from './stylepic/bottom-vents.PNG'
import bottompant from './stylepic/bottom-pant.PNG'
import bottompant3 from './stylepic/bottom-pant-3.PNG'
import bottomcuff from './stylepic/bottom-cuff.PNG'
import bottomfrontcuff1 from './stylepic/bottom-front-cuff1.PNG'
import bottomfrontcuff2 from './stylepic/bottom-front-cuff2.PNG'
import { CollarContrastFabricUI } from "./CollarContrastFabirc";
import { NeckbandContrastFabricUI } from "./NeckbandContrastFabric";
import { CuffContrastFabricUI } from "./CuffContrastFabric";

export const FixedPoloStyle=()=>{
    const { sharedState, setSharedState } = useContext(StyleContext);

    const [CollarContrast,setCollarContrast]=useState('false');
    const CollarContrastFabric=(number)=>{
        if(number==0){
        setCollarContrast('true');
        setSharedState({CollarContrastFlag:true})}
    else{
    setCollarContrast('false');
    setSharedState({CollarContrastFlag:false})
    }

    }

    const [NeckbandContrast,setNeckbandContrast]=useState('false');
    const NeckbandContrastFabric=(number)=>{
        if(number==0){
            setNeckbandContrast('true');
            setSharedState({NeckContrastFlag:true})}
        else{
            setNeckbandContrast('false');
            setSharedState({NeckContrastFlag:false})
    }
    }

    const [CuffContrast,setCuffContrast]=useState('false');
    const CuffContrastFabric=(number)=>{
        if(number==0){
            setCuffContrast('true')
            setSharedState({CuffContrastFlag:true})}
        else{
        setCuffContrast('false')
        setSharedState({CuffContrastFlag:false})    
    }

    }
    const BackPocketStyleChange = (number) => {
        const newarray = new Array(7).fill(false);
        newarray[number] = true;
        setSharedState({ BackPocketStyle: newarray })
    }
    const TicketPocketStyleChange = () => {
        if (sharedState.TicketPocketStyle[0] === true) {
            setSharedState({ TicketPocketStyle: [false, true] })
        }
        else { setSharedState({ TicketPocketStyle: [true, false] }) }
    }
    const BottomStyleChange = (number) => {
        const newarray = new Array(6).fill(false)
        newarray[number] = true;
        if (number > 2)
            newarray[0] = true;
        setSharedState({ BottomStyle: newarray })
    }
    const CollarStyleChange=(number)=>{
        const newarray=new Array(5).fill(false)
        newarray[number]=true
        setSharedState({CollarStyle:newarray})
        

    }
    const ChestStyleChange=(number)=>{
        const newarray=new Array(3).fill(false)
        newarray[number]=true
        setSharedState({ChestStyle:newarray})
    }
    const ButtonFlagChange=(number)=>{
        if(number==0){
        setSharedState({ButtonFlag:[false,true]})}
        else{
        setSharedState({ButtonFlag:[true,false]})
        }
    }
    useEffect(() => {
        // Call the default functions on initial render
        CollarStyleChange(0)
        CollarContrastFabric(0)
        ChestStyleChange(0)
        NeckbandContrastFabric(0)
        ButtonFlagChange(0)
        CuffContrastFabric(0)
        
    }, []);

   
    

    return(
        <div className=" bg-[#141414]  border-solid rounded-md border-2  border-[#bbb5b5] p-2 mx-2 shadow-[#faf397] shadow-lg">
            <article className="text-white flex items-center justify-center text-[18px] font-bold">FIXED COLLAR Style Option</article>
            {/* Collar Style */}
            <div className="grid grid-cols-4 grid-row-2 p-1">
                <div className="text-white text-[13px]" >COLLAR STYLE</div>
                <label className="container text-white" data-tooltip-id="my-tooltip-left" data-tooltip-place="top">

                    <input type="radio" name="collarstyle" onChange={() => CollarStyleChange(0)} defaultChecked/>
                    <span className="checkmark px-1"></span>
                    Round
                </label>
                
                <label
                    className="container text-white"
                    data-tooltip-id="my-tooltip-right"
                    data-tooltip-place="top"
                >

                    <input type="radio" name="collarstyle" onChange={() => CollarStyleChange(1)} />
                    <span className="checkmark px-1"></span>
                    Cutaway
                </label>
                
                <label
                    className="container text-white"
                    data-tooltip-id="my-tooltip-right"
                    data-tooltip-place="top"
                >

                    <input type="radio" name="collarstyle" onChange={() => CollarStyleChange(2)} />
                    <span className="checkmark px-1"></span>
                    Classic
                </label>
                
                <div></div>
                
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-htooltip-right" data-tooltip-place="top">
                    <input type="radio" name="collarstyle" onChange={() => CollarStyleChange(3)} />
                    <span className="checkmark px-1"></span>Button
                </label>
                
                <label className="container text-white   mt-[10px]" data-tooltip-id="my-htooltip-left" data-tooltip-place="top">
                    <input type="radio" name="collarstyle" onChange={() => CollarStyleChange(4)} />
                    <span className="checkmark px-1"></span>Conclead
                </label>
                
                <div></div>
            </div>
            {/* Collar Fabric */}
            <div className="grid grid-cols-3 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">COLLAR FABRIC</div>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-ticket-pocket-h" data-tooltip-place="top">
                    <input type="radio" name="collarfabric" onChange={() =>CollarContrastFabric(0)} defaultChecked/>
                    <span className="checkmark px-1"></span>Contrast
                </label>
               
                <label className="container text-white mt-[10px]" data-tooltip-id="my-ticket-pocket-v" data-tooltip-place="top">
                    <input type="radio" name="collarfabric" onChange={() => CollarContrastFabric(1)} />
                    <span className="checkmark px-1"></span>Plain
                </label>
                
                

            </div>
            {CollarContrast === 'true' && <CollarContrastFabricUI />}
            {/* Chest pocket */}
            <div className="grid grid-cols-4 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">CHEST POCKET</div>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-ticket-pocket-h" data-tooltip-place="top">
                    <input type="radio" name="chest" onChange={() => ChestStyleChange(2)} />
                    <span className="checkmark px-1"></span>NO
                </label>
                
                <label className="container text-white mt-[10px]" data-tooltip-id="my-ticket-pocket-v" data-tooltip-place="top">
                    <input type="radio" name="chest" onChange={() => ChestStyleChange(1)} />
                    <span className="checkmark px-1"></span>Square
                </label>
                
                <label className="container text-white mt-[10px]" data-tooltip-id="my-ticket-pocket-v" data-tooltip-place="top">
                    <input type="radio" name="chest" onChange={() => ChestStyleChange(0)} defaultChecked/>
                    <span className="checkmark px-1"></span>Pointed
                </label>
               

            </div>
            {/* Neckband */}
            <div className="grid grid-cols-3 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">NECKBAND</div>
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                    <input type="radio" name="neckband" onChange={() => NeckbandContrastFabric(0)} defaultChecked />
                    <span className="checkmark px-1"></span>Contrast
                </label>
                
                <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                    <input type="radio" name="neckband" onChange={() => NeckbandContrastFabric(1)} />
                    <span className="checkmark px-1"></span>Plain
                </label>
                {/* <Tooltip id="my-bottom-pant" className='opacity-100' >
                    <div>
                        <img src={bottompant} alt="Cat" className='w-[100px]' />
                        <span>T-3621</span>
                    </div>
                </Tooltip> */}
                

            </div>
            {NeckbandContrast==='true'&& <NeckbandContrastFabricUI/>}
            {/* Placket 2B/3B */}
            <div className="grid grid-cols-3 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">PLACKET</div>
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                    <input type="radio" name="placket" onChange={() => ButtonFlagChange(0)} defaultChecked/>
                    <span className="checkmark px-1"></span>2 Button
                </label>
                {/* <Tooltip id="my-bottom-vent" className='opacity-100' >
                    <div>
                        <img src={bottomvent} alt="Cat" className='w-[100px]' />
                        <span>T-3620</span>
                    </div>
                </Tooltip> */}
                <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                    <input type="radio" name="placket" onChange={() => ButtonFlagChange(1)} />
                    <span className="checkmark px-1"></span>3 Button
                </label>
                {/* <Tooltip id="my-bottom-pant" className='opacity-100' >
                    <div>
                        <img src={bottompant} alt="Cat" className='w-[100px]' />
                        <span>T-3621</span>
                    </div>
                </Tooltip> */}
                

            </div>
            {/* CUFFS Fabric*/}
            <div className="grid grid-cols-3 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">CUFFS FABRIC</div>
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                    <input type="radio" name="cuff" onChange={() => CuffContrastFabric(0)} defaultChecked/>
                    <span className="checkmark px-1"></span>Contrast
                </label>
                {/* <Tooltip id="my-bottom-vent" className='opacity-100' >
                    <div>
                        <img src={bottomvent} alt="Cat" className='w-[100px]' />
                        <span>T-3620</span>
                    </div>
                </Tooltip> */}
                <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                    <input type="radio" name="cuff" onChange={() => CuffContrastFabric(1)} />
                    <span className="checkmark px-1"></span>Plain
                </label>
                {/* <Tooltip id="my-bottom-pant" className='opacity-100' >
                    <div>
                        <img src={bottompant} alt="Cat" className='w-[100px]' />
                        <span>T-3621</span>
                    </div>
                </Tooltip> */}
                

            </div>
            {CuffContrast==='true'&& <CuffContrastFabricUI/>}
            {/* Hem side */}
            <div className="grid grid-cols-3 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">HEM</div>
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                    <input type="radio" name="hem" onChange={() => BottomStyleChange(0)} />
                    <span className="checkmark px-1"></span>Slits
                </label>
                {/* <Tooltip id="my-bottom-vent" className='opacity-100' >
                    <div>
                        <img src={bottomvent} alt="Cat" className='w-[100px]' />
                        <span>T-3620</span>
                    </div>
                </Tooltip> */}
                <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                    <input type="radio" name="hem" onChange={() => BottomStyleChange(1)} />
                    <span className="checkmark px-1"></span>Plain
                </label>
                {/* <Tooltip id="my-bottom-pant" className='opacity-100' >
                    <div>
                        <img src={bottompant} alt="Cat" className='w-[100px]' />
                        <span>T-3621</span>
                    </div>
                </Tooltip> */}
                

            </div>
            </div>

    );
}