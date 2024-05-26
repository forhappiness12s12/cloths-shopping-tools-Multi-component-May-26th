import React from "react";
import { useState, useContext } from "react";
import { StyleContext } from "./StyleProviderPolo";


export const CuffContrastFabricUI = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const Fabricimages = importAll(require.context('../Fabric', false, /\.jpg$/));
  const { sharedState, setSharedState } = useContext(StyleContext);


  const selectFabric = (index) => {
    setSharedState({ Fabricindex: index }); //operation for seleting fabric
  };

  return (
    
    <div className="border-solid border-2 opacity-80 shadow-white shadow-md bg-[#1f1d1d] border-[#A6A6A6]  mx-2 p-2 rounded-md flex flex-col mt-[10px] ">
    <article className="text-white flex items-center justify-center text-[18px] font-bold">Cuff Fabric  Option</article>
    <div className="flex flex-row  bg-slate-600 overflow-x-auto border-solid rounded-md border-2 mx-1 border-[#a89e9e]  shadow-[#fab697] shadow-lg">

        {Fabricimages.map((img, index) => (
          <button key={index} onClick={() => selectFabric(index)}  >
            <img src={img} alt={`Image ${index + 1}`} className='h-[30px] w-[250px]' />
            <div className="mr-26"></div>
          </button>
        ))}
      </div>
    </div>


  );
};
