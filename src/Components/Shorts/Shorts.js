import React, { useContext } from "react";
import { StyleProvider } from "./StyleproviderShorts";
import { ShortsModel } from "./ShortsModel";
import { ShortsUIfabric } from "./ShortsUIfabric";
import { Selectoption } from "../Selectoption";
import { Selectoptiontotall } from "../Selectoptiontotall";
import { ImprovedNoise } from "three/examples/jsm/Addons.js";

export const Shorts = () => {

    return (
        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-[#252525]">
            <div className="lg:w-[70%] lg:h-full w-full h-[70%] bg-[#141720] text-[white] ">
                    <ShortsModel />
                </div>
                
                <div className="lg:w-[30%] lg:h-full w-full h-[30%] overflow-y-auto bg-[#181717] shadow-[#f0f0ef] shadow-lg">
                    <Selectoptiontotall/>
                    <ShortsUIfabric />

                </div>
            </div>
        </StyleProvider>

    );
}