
import React, { useState } from "react";
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
        if(number==0)
            setNeckbandContrast('true');
        else
        setNeckbandContrast('false');
    }

    const [CuffContrast,setCuffContrast]=useState('false');
    const CuffContrastFabric=(number)=>{
        if(number==0)
            setCuffContrast('true')
        else
        setCuffContrast('false')

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
        console.log("Collarstyleorder:",sharedState.CollarStyle)

    }

    return(
        <div className=" bg-[#141414]  border-solid rounded-md border-2  border-[#bbb5b5] p-2 mx-2 shadow-[#faf397] shadow-lg">
            <article className="text-white flex items-center justify-center text-[18px] font-bold">FIXED COLLAR Style Option</article>
            {/* Collar Style */}
            <div className="grid grid-cols-4 grid-row-2 p-1">
                <div className="text-white text-[13px]" >COLLAR STYLE</div>
                <label className="container text-white" data-tooltip-id="my-tooltip-left" data-tooltip-place="top">

                    <input type="radio" name="collarstyle" onChange={() => CollarStyleChange(0)} />
                    <span className="checkmark px-1"></span>
                    Round
                </label>
                <Tooltip id="my-tooltip-left" className='opacity-100 justify-center items-center' >
                    <div>
                        <img src={halfpointedright} alt="Cat" className='w-[100px]' />
                        <span >T32K2</span>
                    </div>
                </Tooltip>
                <label
                    className="container text-white"
                    data-tooltip-id="my-tooltip-right"
                    data-tooltip-place="top"
                >

                    <input type="radio" name="collarstyle" onChange={() => CollarStyleChange(1)} />
                    <span className="checkmark px-1"></span>
                    Cutaway
                </label>
                <Tooltip id="my-tooltip-right" className="opacity-100">
                    <div>
                        <img src={halfpointedleft} alt="Cat" className='w-[100px]' />
                        <span>T32K3</span>
                    </div>
                </Tooltip>
                <label
                    className="container text-white"
                    data-tooltip-id="my-tooltip-right"
                    data-tooltip-place="top"
                >

                    <input type="radio" name="collarstyle" onChange={() => CollarStyleChange(2)} />
                    <span className="checkmark px-1"></span>
                    Classic
                </label>
                <Tooltip id="my-tooltip-right" className="opacity-100">
                    <div>
                        <img src={halfpointedleft} alt="Cat" className='w-[100px]' />
                        <span>T32K3</span>
                    </div>
                </Tooltip>
                <div></div>
                
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-htooltip-right" data-tooltip-place="top">
                    <input type="radio" name="collarstyle" onChange={() => CollarStyleChange(3)} />
                    <span className="checkmark px-1"></span>Button
                </label>
                <Tooltip id="my-htooltip-right" className='opacity-100' >
                    <div>
                        <img src={pointedflapright} alt="Cat" className='w-[100px]' />
                        <span>T32H9</span>
                    </div>
                </Tooltip>
                <label className="container text-white   mt-[10px]" data-tooltip-id="my-htooltip-left" data-tooltip-place="top">
                    <input type="radio" name="collarstyle" onChange={() => CollarStyleChange(4)} />
                    <span className="checkmark px-1"></span>Conclead
                </label>
                <Tooltip id="my-htooltip-left" className='opacity-100' >
                    <div>
                        <img src={pointedflapleft} alt="Cat" className='w-[100px]' />
                        <span>T32J1</span>
                    </div>
                </Tooltip>
                <div></div>
            </div>
            {/* Collar Fabric */}
            <div className="grid grid-cols-3 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">COLLAR FABRIC</div>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-ticket-pocket-h" data-tooltip-place="top">
                    <input type="radio" name="collarfabric" onChange={() =>CollarContrastFabric(0)} />
                    <span className="checkmark px-1"></span>Contrast
                </label>
                <Tooltip id="my-ticket-pocket-h" className='opacity-100' >
                    <div>
                        <img src={ticketpointhor} alt="Cat" className='w-[100px]' />
                        <span>Ticket Horizontal</span>
                    </div>
                </Tooltip>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-ticket-pocket-v" data-tooltip-place="top">
                    <input type="radio" name="collarfabric" onChange={() => CollarContrastFabric(1)} />
                    <span className="checkmark px-1"></span>Plain
                </label>
                <Tooltip id="my-ticket-pocket-v" className='opacity-100' >
                    <div>
                        <img src={ticketpointver} alt="Cat" className='w-[100px]' />
                        <span>Ticket Vertical</span>
                    </div>
                </Tooltip>
                

            </div>
            {CollarContrast === 'true' && <CollarContrastFabricUI />}
            {/* Chest pocket */}
            <div className="grid grid-cols-4 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">CHEST POCKET</div>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-ticket-pocket-h" data-tooltip-place="top">
                    <input type="radio" name="chest" onChange={() => TicketPocketStyleChange()} />
                    <span className="checkmark px-1"></span>NO
                </label>
                <Tooltip id="my-ticket-pocket-h" className='opacity-100' >
                    <div>
                        <img src={ticketpointhor} alt="Cat" className='w-[100px]' />
                        <span>Ticket Horizontal</span>
                    </div>
                </Tooltip>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-ticket-pocket-v" data-tooltip-place="top">
                    <input type="radio" name="chest" onChange={() => TicketPocketStyleChange()} />
                    <span className="checkmark px-1"></span>Square
                </label>
                <Tooltip id="my-ticket-pocket-v" className='opacity-100' >
                    <div>
                        <img src={ticketpointver} alt="Cat" className='w-[100px]' />
                        <span>Ticket Vertical</span>
                    </div>
                </Tooltip>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-ticket-pocket-v" data-tooltip-place="top">
                    <input type="radio" name="ticket" onChange={() => TicketPocketStyleChange()} />
                    <span className="checkmark px-1"></span>Pointed
                </label>
                <Tooltip id="my-ticket-pocket-v" className='opacity-100' >
                    <div>
                        <img src={ticketpointver} alt="Cat" className='w-[100px]' />
                        <span>Ticket Vertical</span>
                    </div>
                </Tooltip>

            </div>
            {/* Neckband */}
            <div className="grid grid-cols-3 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">NECKBAND</div>
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                    <input type="radio" name="neckband" onChange={() => NeckbandContrastFabric(0)} />
                    <span className="checkmark px-1"></span>Contrast
                </label>
                <Tooltip id="my-bottom-vent" className='opacity-100' >
                    <div>
                        <img src={bottomvent} alt="Cat" className='w-[100px]' />
                        <span>T-3620</span>
                    </div>
                </Tooltip>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                    <input type="radio" name="neckband" onChange={() => NeckbandContrastFabric(1)} />
                    <span className="checkmark px-1"></span>Plain
                </label>
                <Tooltip id="my-bottom-pant" className='opacity-100' >
                    <div>
                        <img src={bottompant} alt="Cat" className='w-[100px]' />
                        <span>T-3621</span>
                    </div>
                </Tooltip>
                

            </div>
            {NeckbandContrast==='true'&& <NeckbandContrastFabricUI/>}
            {/* Placket 2B/3B */}
            <div className="grid grid-cols-3 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">PLACKET</div>
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                    <input type="radio" name="placket" onChange={() => BottomStyleChange(0)} />
                    <span className="checkmark px-1"></span>2 Button
                </label>
                <Tooltip id="my-bottom-vent" className='opacity-100' >
                    <div>
                        <img src={bottomvent} alt="Cat" className='w-[100px]' />
                        <span>T-3620</span>
                    </div>
                </Tooltip>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                    <input type="radio" name="placket" onChange={() => BottomStyleChange(1)} />
                    <span className="checkmark px-1"></span>3 Button
                </label>
                <Tooltip id="my-bottom-pant" className='opacity-100' >
                    <div>
                        <img src={bottompant} alt="Cat" className='w-[100px]' />
                        <span>T-3621</span>
                    </div>
                </Tooltip>
                

            </div>
            {/* CUFFS Fabric*/}
            <div className="grid grid-cols-3 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">CUFFS FABRIC</div>
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                    <input type="radio" name="cuff" onChange={() => CuffContrastFabric(0)} />
                    <span className="checkmark px-1"></span>Contrast
                </label>
                <Tooltip id="my-bottom-vent" className='opacity-100' >
                    <div>
                        <img src={bottomvent} alt="Cat" className='w-[100px]' />
                        <span>T-3620</span>
                    </div>
                </Tooltip>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                    <input type="radio" name="cuff" onChange={() => CuffContrastFabric(1)} />
                    <span className="checkmark px-1"></span>Plain
                </label>
                <Tooltip id="my-bottom-pant" className='opacity-100' >
                    <div>
                        <img src={bottompant} alt="Cat" className='w-[100px]' />
                        <span>T-3621</span>
                    </div>
                </Tooltip>
                

            </div>
            {CuffContrast==='true'&& <CuffContrastFabricUI/>}
            {/* Hem side */}
            <div className="grid grid-cols-3 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">HEM</div>
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                    <input type="radio" name="hem" onChange={() => BottomStyleChange(0)} />
                    <span className="checkmark px-1"></span>Slits
                </label>
                <Tooltip id="my-bottom-vent" className='opacity-100' >
                    <div>
                        <img src={bottomvent} alt="Cat" className='w-[100px]' />
                        <span>T-3620</span>
                    </div>
                </Tooltip>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                    <input type="radio" name="hem" onChange={() => BottomStyleChange(1)} />
                    <span className="checkmark px-1"></span>Plain
                </label>
                <Tooltip id="my-bottom-pant" className='opacity-100' >
                    <div>
                        <img src={bottompant} alt="Cat" className='w-[100px]' />
                        <span>T-3621</span>
                    </div>
                </Tooltip>
                

            </div>
            </div>

    );
}