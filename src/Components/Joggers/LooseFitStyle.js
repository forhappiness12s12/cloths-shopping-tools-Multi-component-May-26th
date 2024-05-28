import React from "react";
import { StyleContext } from "./StyleProviderJoggers";
import { useContext,startTransition } from "react";
import { Tooltip } from 'react-tooltip'
import halfpointedright from './stylepic/half-pointed-right.png'
import halfpointedleft from './stylepic/half-pointed-left.png'

export const LooseFitStyle=()=>{
    const { sharedState, setSharedState } = useContext(StyleContext);
    
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
    const BackPocketStyleChange = (number) => {
        const newarray = new Array(7).fill(false);
        newarray[number] = true;
        setSharedState({ BackPocketStyle: newarray })
    }
    const Change_Model_Index_call = (number) => {
        startTransition(() => {
            setSharedState({ Change_Model_Index: number });
        });
    };

    return(
        <div className=" bg-[#141414]  border-solid rounded-md border-2  border-[#bbb5b5] p-2 mx-2 shadow-[#faf397] shadow-lg">
                <article className="text-white flex items-center justify-center text-[18px] font-bold">Loose Fit Leg Style Option</article>
                {/* Rope */}
                <div className="grid grid-cols-2 grid-row-5 p-2">
                    <div className="text-white text-[20px] p-2" >WITH ROPE</div>
                    <label className="container text-[20px] text-white p-2" data-tooltip-id="my-tooltip-left" data-tooltip-place="top">

                        <input type="radio" name="rope" onChange={() => Change_Model_Index_call(0)} />
                        <span className="checkmark px-1 "></span>
                        
                    </label>
                    {/* <Tooltip id="my-tooltip-left" className='opacity-100 justify-center items-center z-10' >
                        <div>
                            <img src={halfpointedright} alt="Cat" className='w-[100px]' />
                            <span >T32K2</span>
                        </div>
                    </Tooltip> */}
                    <div className="text-white text-[20px] p-2" >RIB CUFF</div>
                    <label
                        className="container text-white p-2"
                        data-tooltip-id="my-tooltip-right"
                        data-tooltip-place="top"
                    >

                        <input type="radio" name="rope" onChange={() => Change_Model_Index_call(1)} />
                        <span className="checkmark px-1"></span>
                        
                    </label>
                    {/* <Tooltip id="my-tooltip-right" className="opacity-100 z-10">
                        <div>
                            <img src={halfpointedleft} alt="Cat" className='w-[100px]' />
                            <span>T32K3</span>
                        </div>
                    </Tooltip> */}
                    <div className="text-white text-[20px] p-2" >FRONT POCKET</div>
                    <label className="container text-white p-2" data-tooltip-id="my-tooltip-left" data-tooltip-place="top">

                        <input type="radio" name="rope" onChange={() => Change_Model_Index_call(2)} />
                        <span className="checkmark px-1"></span>
                        
                    </label>
                    {/* <Tooltip id="my-tooltip-left" className='opacity-100 justify-center items-center' >
                        <div>
                            <img src={halfpointedright} alt="Cat" className='w-[100px]' />
                            <span >T32K2</span>
                        </div>
                    </Tooltip> */}
                    <div className="text-white text-[20px] p-2" >GENERAL</div>
                    <label
                        className="container text-white p-2"
                        data-tooltip-id="my-tooltip-right"
                        data-tooltip-place="top"
                    >

                        <input type="radio" name="rope" onChange={() => Change_Model_Index_call(3)} />
                        <span className="checkmark px-1"></span>
                        
                    </label>
                    {/* <Tooltip id="my-tooltip-right" className="opacity-100">
                        <div>
                            <img src={halfpointedleft} alt="Cat" className='w-[100px]' />
                            <span>T32K3</span>
                        </div>
                    </Tooltip> */}
                    <div className="text-white text-[20px] p-2" >BACK POCKET</div>
                    <label className="container text-white p-2" data-tooltip-id="my-tooltip-left" data-tooltip-place="top">

                        <input type="radio" name="rope" onChange={() => Change_Model_Index_call(4)} />
                        <span className="checkmark px-1 "></span>
                        
                    </label>
                    {/* <Tooltip id="my-tooltip-left" className='opacity-100 justify-center items-center' >
                        <div>
                            <img src={halfpointedright} alt="Cat" className='w-[100px]' />
                            <span >T32K2</span>
                        </div>
                    </Tooltip> */}

                </div>
                
                
               
            </div>
    );
}