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
import { ChangeCuffContrastFabricUI } from "./ChangeCuffContrastFabric";

export const ChangePoloStyle=()=>{
    const { sharedState, setSharedState } = useContext(StyleContext);
    const [ChangeCuffContrast,setChangeCuffContrast]=useState('false')
    const ChangeCuffContrastFabric=(number)=>{
        if(number==0)
            setChangeCuffContrast('true')
        else
        setChangeCuffContrast('false')

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

    return(
        <div className=" bg-[#141414]  border-solid rounded-md border-2  border-[#bbb5b5] p-2 mx-2 mt-4 shadow-[#faf397] shadow-lg">
            <article className="text-white flex items-center justify-center text-[18px] font-bold">INTERCHANGEABLE COLLAR Style Option</article>
            {/* Collar Style */}
            <div className="grid grid-cols-3 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">COLLAR STYLE</div>
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                    <input type="radio" name="icollar" onChange={() => BottomStyleChange(0)} />
                    <span className="checkmark px-1"></span>Round
                </label>
                <Tooltip id="my-bottom-vent" className='opacity-100' >
                    <div>
                        <img src={bottomvent} alt="Cat" className='w-[100px]' />
                        <span>T-3620</span>
                    </div>
                </Tooltip>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                    <input type="radio" name="icollar" onChange={() => BottomStyleChange(1)} />
                    <span className="checkmark px-1"></span>Cutaway
                </label>
                <Tooltip id="my-bottom-pant" className='opacity-100' >
                    <div>
                        <img src={bottompant} alt="Cat" className='w-[100px]' />
                        <span>T-3621</span>
                    </div>
                </Tooltip>
                

            </div>
            <CollarContrastFabricUI/>
            {/* Cuff */}
            <div className="grid grid-cols-3 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">CUFF</div>
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                    <input type="radio" name="icuff" onChange={() => ChangeCuffContrastFabric(0)} />
                    <span className="checkmark px-1"></span>Contrast
                </label>
                <Tooltip id="my-bottom-vent" className='opacity-100' >
                    <div>
                        <img src={bottomvent} alt="Cat" className='w-[100px]' />
                        <span>T-3620</span>
                    </div>
                </Tooltip>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                    <input type="radio" name="icuff" onChange={() => ChangeCuffContrastFabric(1)} />
                    <span className="checkmark px-1"></span>Plain
                </label>
                <Tooltip id="my-bottom-pant" className='opacity-100' >
                    <div>
                        <img src={bottompant} alt="Cat" className='w-[100px]' />
                        <span>T-3621</span>
                    </div>
                </Tooltip>
                

            </div>
            {ChangeCuffContrast==='true'&& <ChangeCuffContrastFabricUI/>}
            {/* Chest Pocket */}
            <div className="grid grid-cols-4 grid-rows-1 p-1">
                <div className="text-white text-[13px] mt-[10px]">CHEST POCKET</div>
                <label className="container text-white  mt-[10px]" data-tooltip-id="my-bottom-vent" data-tooltip-place="top">
                    <input type="radio" name="ichest" onChange={() => ChangeCuffContrastFabric(0)} />
                    <span className="checkmark px-1"></span>NO
                </label>
                <Tooltip id="my-bottom-vent" className='opacity-100' >
                    <div>
                        <img src={bottomvent} alt="Cat" className='w-[100px]' />
                        <span>T-3620</span>
                    </div>
                </Tooltip>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                    <input type="radio" name="ichest" onChange={() => ChangeCuffContrastFabric(1)} />
                    <span className="checkmark px-1"></span>SQUARE
                </label>
                <Tooltip id="my-bottom-pant" className='opacity-100' >
                    <div>
                        <img src={bottompant} alt="Cat" className='w-[100px]' />
                        <span>T-3621</span>
                    </div>
                </Tooltip>
                <label className="container text-white mt-[10px]" data-tooltip-id="my-bottom-pant" data-tooltip-place="top">
                    <input type="radio" name="ichest" onChange={() => ChangeCuffContrastFabric(1)} />
                    <span className="checkmark px-1"></span>POINTED
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