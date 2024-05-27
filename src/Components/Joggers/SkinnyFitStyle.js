import React from "react";
import { StyleContext } from "./StyleProviderJoggers";
import { useContext,startTransition } from "react";
import { Tooltip } from 'react-tooltip'
import halfpointedright from './stylepic/half-pointed-right.png'
import halfpointedleft from './stylepic/half-pointed-left.png'

export const SkinnyFitStyle = () => {
    const { sharedState, setSharedState } = useContext(StyleContext);
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
    const Change_Model_Index_call = (number) => {
        startTransition(() => {
            setSharedState({ Change_Model_Index: number });
        });
    };



    return (
        <div className=" bg-[#141414]  border-solid rounded-md border-2  border-[#bbb5b5] p-2 mx-2 shadow-[#faf397] shadow-lg">
            <article className="text-white flex items-center justify-center text-[18px] font-bold">Skiny Fit Leg Style Option</article>
            <div className="grid grid-cols-3 grid-row-1 p-1">
                    <div className="text-white text-[13px]" >ROPE</div>
                    <label className="container text-white" data-tooltip-id="my-tooltip-left" data-tooltip-place="top">

                        <input type="radio" name="rope" onChange={() => Change_Model_Index_call(5)} />
                        <span className="checkmark px-1"></span>
                        TRUE
                    </label>
                    <Tooltip id="my-tooltip-left" className='opacity-100 justify-center items-center z-10' >
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

                        <input type="radio" name="rope" onChange={() => Change_Model_Index_call(6)} />
                        <span className="checkmark px-1"></span>
                        FAlSE
                    </label>
                    <Tooltip id="my-tooltip-right" className="opacity-100 z-10">
                        <div>
                            <img src={halfpointedleft} alt="Cat" className='w-[100px]' />
                            <span>T32K3</span>
                        </div>
                    </Tooltip>

                </div>
                {/* fly */}
                <div className="grid grid-cols-3 grid-row-1 p-1">
                    <div className="text-white text-[13px]" >FLY</div>
                    <label className="container text-white" data-tooltip-id="my-tooltip-left" data-tooltip-place="top">

                        <input type="radio" name="rope" onChange={() => Change_Model_Index_call(7)} />
                        <span className="checkmark px-1"></span>
                        TRUE
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

                        <input type="radio" name="rope" onChange={() => Change_Model_Index_call(8)} />
                        <span className="checkmark px-1"></span>
                        FAlSE
                    </label>
                    <Tooltip id="my-tooltip-right" className="opacity-100">
                        <div>
                            <img src={halfpointedleft} alt="Cat" className='w-[100px]' />
                            <span>T32K3</span>
                        </div>
                    </Tooltip>

                </div>
                {/* Hem */}
                <div className="grid grid-cols-3 grid-row-1 p-1">
                    <div className="text-white text-[13px]" >HEM</div>
                    <label className="container text-white" data-tooltip-id="my-tooltip-left" data-tooltip-place="top">

                        <input type="radio" name="rope" onChange={() => Change_Model_Index_call(9)} />
                        <span className="checkmark px-1"></span>
                        TRUE
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

                        <input type="radio" name="hem" onChange={() => BackPocketStyleChange(1)} />
                        <span className="checkmark px-1"></span>
                        FAlSE
                    </label>
                    <Tooltip id="my-tooltip-right" className="opacity-100">
                        <div>
                            <img src={halfpointedleft} alt="Cat" className='w-[100px]' />
                            <span>T32K3</span>
                        </div>
                    </Tooltip>

                </div>
                <div className="grid grid-cols-3 grid-row-1 p-1">
                    <div className="text-white text-[13px]" >HEM</div>
                    <label className="container text-white" data-tooltip-id="my-tooltip-left" data-tooltip-place="top">

                        <input type="radio" name="flap" onChange={() => BackPocketStyleChange(0)} />
                        <span className="checkmark px-1"></span>
                        TRUE
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

                        <input type="radio" name="flap" onChange={() => BackPocketStyleChange(1)} />
                        <span className="checkmark px-1"></span>
                        FAlSE
                    </label>
                    <Tooltip id="my-tooltip-right" className="opacity-100">
                        <div>
                            <img src={halfpointedleft} alt="Cat" className='w-[100px]' />
                            <span>T32K3</span>
                        </div>
                    </Tooltip>

                </div>
        </div>

    );

}