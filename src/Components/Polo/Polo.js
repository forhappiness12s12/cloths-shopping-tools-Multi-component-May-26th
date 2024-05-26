import React, { useContext } from "react";
import { PoloModel } from "./PoloModel";
import { PoloUIfabric } from "./PoloUIfabric";
import { StyleProvider } from "./StyleProviderPolo";
import { Selectoption } from "../Selectoption";
import { PoloStyleChange } from "./PoloStyle";
import { Selectoptiontotall } from "../Selectoptiontotall";

export const Polo = () => {

    return (
        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-[#252525]">
            <div className="lg:w-[70%] lg:h-full w-full h-[70%] bg-[#141720] text-[white] ">
                    <PoloModel />
                </div>
                <div className="lg:w-[30%] lg:h-full w-full h-[30%] overflow-y-auto bg-[#181717] shadow-[#f0f0ef] shadow-lg">
                    <Selectoptiontotall/>
                    <PoloUIfabric />
                    <PoloStyleChange />
                </div>
            </div>
        </StyleProvider>

    );
}