import React, { useContext } from "react";
import { JoggersModel } from "./JoggerModel";
import { JoggersUIfabric } from "./JogerUIfabric";
import { StyleProvider } from "./StyleProviderJoggers";
import { Selectoption } from "../Selectoption";
import { JoggerStyleChange } from "./JoggerStyle";
import { Selectoptiontotall } from "../Selectoptiontotall";

export const Joggers = () => {

    return (
        <StyleProvider>

            <div className="flex lg:flex-row flex-col h-full bg-[#252525]">
            <div className="lg:w-[70%] lg:h-full w-full h-[70%] bg-[#141720] text-[white] ">
                    <JoggersModel />
                </div>
                <div className="lg:w-[30%] lg:h-full w-full h-[30%] overflow-y-auto bg-[#181717] shadow-[#f0f0ef] shadow-lg">
                    <Selectoptiontotall/>
                    <JoggersUIfabric />
                    <JoggerStyleChange />
                </div>
            </div>
        </StyleProvider>

    );
}