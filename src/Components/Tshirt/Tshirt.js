import React, { useContext } from "react";
import { StyleProvider } from "./StyleproviderTshirt";
import { TshirtModel } from "./TshirtModel";
import { TshirtUIfabric } from "./TshirtUIfabric";
import { Selectoption } from "../Selectoption";
import { Selectoptiontotall } from "../Selectoptiontotall";

export const Tshirt = () => {

    return (
        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-[#252525]">
            <div className="lg:w-[70%] lg:h-full w-full h-[70%] bg-[#141720] text-[white] ">
                    <TshirtModel />
                </div>
                
                <div className="lg:w-[30%] lg:h-full w-full h-[30%] overflow-y-auto bg-[#181717] shadow-[#f0f0ef] shadow-lg">
                    <Selectoptiontotall/>
                    <TshirtUIfabric />

                </div>
            </div>
        </StyleProvider>

    );
}