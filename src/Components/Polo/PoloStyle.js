import React, { useState } from "react";
import { StyleContext } from "./StyleProviderPolo";
import { useContext } from "react";

import { FixedPoloStyle } from "./FixedPoloStyle";
import { ChangePoloStyle } from "./ChangePoloStyle";


export const PoloStyleChange = () => {
    const [producttype,setproducttype]=useState('Changeable')
    
    const [fixedorchanged,setfixedorchanged]=useState('true');
    const Callfixedorchanged=()=>{
        if(fixedorchanged=='false'){
        setfixedorchanged('true')
        setproducttype('Changeable')
    
    }
        if(fixedorchanged=='true'){
        setfixedorchanged('false')
        setproducttype('Fixed')
    }
    console.log("fiexed",fixedorchanged)
        
    }

 
    return (
        <div className=" bg-[#141414]  border-solid rounded-md border-2  border-[#bbb5b5] p-2 mt-4 mx-2 shadow-[#faf397] shadow-lg">

            <article className="text-white flex items-center justify-center text-[28px] font-bold mb-2">Polo Style Option</article>
            <div className="flex items-center text-white text-[18px] mx-3">
                <div>COLLAR TYPE</div>
            <button className="button-86 w-[25%] p-2 mb-3 mx-3 text-[15px] " onClick={()=>Callfixedorchanged()}>{producttype}</button>
            </div>
            {fixedorchanged==='true'&&<FixedPoloStyle/>}
            {fixedorchanged==='false'&&<ChangePoloStyle/>}
            
            
            
        </div>

    );
}