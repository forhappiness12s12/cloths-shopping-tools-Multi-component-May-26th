import React, { useState } from "react";
import { StyleContext } from "./StyleProviderJoggers";
import { useContext } from "react";
import { LooseFitStyle } from "./LooseFitStyle";
import { SkinnyFitStyle } from "./SkinnyFitStyle";


export const JoggerStyleChange = () => {
    const { sharedState, setSharedState } = useContext(StyleContext);
    const [producttype,setproducttype]=useState('Skinny Fit');
    const [Joggertype,setJoggertype]=useState('true');
    const CallJoggerType=()=>{
        if(Joggertype=='false')
            {setJoggertype('true')
                setproducttype('Skinny Fit')
            }
        else{
        setJoggertype('false')
        setproducttype('Loose Fit')
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
    return (
        <div className=" bg-[#141414]  border-solid rounded-md border-2  border-[#bbb5b5] p-2 mt-4 mx-2 shadow-[#faf397] shadow-lg">

            <article className="text-white flex items-center justify-center text-[28px] font-bold mb-2">Joggers Style  Option</article>
            <div className="flex items-center text-white text-[18px]">
            <div className="text-white text-[18px] mx-4">JOGGER TYPE</div>
            <button className="button-86 w-[25%] p-2 mb-3 mx-3 text-[18px]" onClick={()=>CallJoggerType()}>{producttype}</button>
            </div>
            {Joggertype==='true'&&<LooseFitStyle/>}
            {Joggertype==='false'&&<SkinnyFitStyle/>}

            
        </div>

    );
}