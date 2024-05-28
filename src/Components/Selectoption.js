import React, { startTransition } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { StyleContext } from "./SelectoptionProvider";

export const Selectoption = () => {
    const navigate = useNavigate();
    const { sharedState, setSharedState } = useContext(StyleContext);


    const goToPage = (component, path) => {
        setSharedState({Productype:component})
        
        startTransition(() => {
            navigate(path);
        });
        console.log("producttype:::",sharedState.Productype)

    };

    return (
        
        <div className="flex items-center">
            <article className="text-white flex items-center justify-center text-[20px] font-bold mx-4">Selection</article>
            <div className="dropdown z-10 ">
                <label htmlFor="dropdown" className="dropdown-btn  opacity-80">
                    <span className="flex justify-center">{sharedState.Productype}</span>
                    <span className="arrow"></span>
                </label>
                <ul className="dropdown-content opacity-90" role="menu">
                    <li><button onClick={() => goToPage('Trousers','/Trousers',)} className="w-[100%] h-15  text-white">Trousers</button></li>
                    <li><button onClick={() => goToPage('Jogger','/Joggers', )} className="w-[100%] h-15 text-white">Jogger</button></li>
                    <li><button onClick={() => goToPage('Tshirt','/Tshirt' )} className="w-[100%] h-15  text-white">Tshirt</button></li>
                    <li><button onClick={() => goToPage('Polo','/Polo' )} className="w-[100%] h-15 text-white">Polo</button></li>
                    <li><button onClick={() => goToPage('Shorts','/Shorts' )} className="w-[100%] h-15 text-white">Shorts</button></li>
                </ul>
            </div>
        </div>
       
    );
}
