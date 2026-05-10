import { ReactNode } from "react";
import { Jiemian } from "../../types/global";
import React from 'react'
import AnotherDiv from "./anotherDiv";
import back_ground from "./back_ground";
import Back_ground from "./back_ground";
const Jiemian1 : React.FC<Jiemian> = (get) => {
    const a_1 = get.scrollY/get.innerHeight
    const a_0 = get.innerHeight*(3.5-a_1);
    let print : ReactNode[] = [];
    return (
        <div key="jiemian1">
            <Back_ground 
                key="Back_ground"
                innerHeight={get.innerHeight}
                innerWidth={get.innerWidth}
                scrollY={get.scrollY}
                refresh={get.refresh}
                refreshNum={get.refreshNum}/>
            {print}
            <AnotherDiv 
                key="jiemian0"
                innerHeight={get.innerHeight}
                innerWidth={get.innerWidth}
                scrollY={get.scrollY}
                refresh={get.refresh}
                refreshNum={get.refreshNum}/>
        </div>
    )
}
export default React.memo(Jiemian1)