import { ReactNode } from "react";
import { Jiemian } from "../../types/global";
import {Random_2D} from '../../random';
import React from 'react'
import Bg_star from "./another";
const Jiemian1 : React.FC<Jiemian> = (get) => {
    const a_1 = get.scrollY/get.innerHeight
    const a_0 = get.innerHeight*(3.5-a_1);
    let print : ReactNode[] = [];
    return (
        <div key="jiemian1">
            <Bg_star 
                key="jiemian1"
                innerHeight={get.innerHeight}
                innerWidth={get.innerWidth}
                scrollY={get.scrollY}
                refresh={get.refresh}
                refreshNum={get.refreshNum}/>
            {print}
            123
        </div>
    )
}
export default React.memo(Jiemian1)