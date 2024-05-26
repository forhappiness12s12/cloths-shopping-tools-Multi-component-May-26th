import React, { useContext } from "react";
import { TrousersUIfabric } from "./TrousersUIfabric";
import { TrousersStyleChange } from "./TrousersStyle";
import { TrousersModel } from "./TrousersModel";
import { StyleProvider } from "./StyleProvider";
import { Selectoption } from "../Selectoption";
import { Selectoptiontotall } from "../Selectoptiontotall";

export const Trousers = () => {

    return (
        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-[#292929]">
                <div className="lg:w-[70%] lg:h-full w-full h-[70%] bg-[#141720] text-[white] ">
                    <TrousersModel />
                </div>
                
                <div className="lg:w-[30%] lg:h-full w-full h-[30%] overflow-y-auto bg-[#181717] shadow-[#f0f0ef] shadow-lg">
                    <Selectoptiontotall/>
                    <TrousersUIfabric />
                    <TrousersStyleChange/>
                </div>
            </div>
        </StyleProvider>

    );
}