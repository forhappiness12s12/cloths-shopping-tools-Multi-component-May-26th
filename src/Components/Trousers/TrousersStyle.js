import React, { useState } from "react";
import { StyleContext } from "./StyleProvider";
import { useContext } from "react";
import { RegularLegStyle } from "./RegularLegStyle";
import { SlimLegStyle } from "./SlimLegStyle";


export const TrousersStyleChange = () => {
    const { sharedState, setSharedState } = useContext(StyleContext);
    const [slimorregular,setslimorregular]=useState('true');
    const [producttype,setproducttype]=useState('Slim Leg')
    const Callslimorregular=()=>{
        if(slimorregular=='true'){
            setslimorregular('false')
            setproducttype('Regular Leg')
        }
        else{
            setslimorregular('true')
            setproducttype('Slim Leg')
        }
    }
    return (
        <div className="flex flex-col border-solid border-2 opacity-80 shadow-white shadow-md bg-[#000000] border-[#A6A6A6] h-100 mx-2 mt-[20px] p-3 rounded-md  ">

            <article className="text-white flex items-center justify-center text-[28px] font-bold">TROUSERS STYLE OPTION</article>
            <div className="flex items-center text-white text-[18px] mx-3">
                <div>TROUSERS TYPE</div>
            <button className="button-86 w-[25%] p-2 mb-3 mx-3 text-[18px] " onClick={()=>Callslimorregular()}>{producttype}</button>
            </div>

            {producttype==='Slim Leg'&&<RegularLegStyle/>}
            {producttype==='Regular Leg'&&<SlimLegStyle/>}
            
        </div>

    );
}