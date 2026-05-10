import {ReactNode} from 'react';
import '../../cloud.css';
import React from 'react'
import { Jiemian } from '../../types/global';
import { OnlyUse } from '../../../../components/OnlyUse.tsx';
import {fullCloud_0,DivMain} from './another.tsx'
const theName = new OnlyUse();

const Jiemian0:React.FC<Jiemian> = (get) => {
    const a_1 = get.scrollY/get.innerHeight
    const a_0 = get.innerHeight*(1-a_1);
    let print : ReactNode[] = [];//下面的云
    fullCloud_0(print,get.innerHeight*0.15,get.innerWidth,'web0_deep_cloud_3',get.innerHeight*0.7,get.innerHeight*0.7,a_0*0.45,'/cloud_down.png')
    print.push(//大云
    <div key={print.length} >
        <img 
        key={0} 
        src='/cloud_big.png' 
        loading='lazy' 
        alt="云" 
        style={{
            position:'absolute',
            top:-get.innerHeight*0.9+get.scrollY*0.5+"px",
            left:-8-get.scrollY*0.2+"px",
            height:get.innerHeight*0.7+"px",
            width:get.innerHeight*0.7*1.17+"px",
            opacity:1-a_1**5
            }}
        />
    </div>)
    fullCloud_0(print,get.innerHeight*0.2,get.innerWidth,'web0_deep_cloud_2',get.innerHeight*0.8,get.innerHeight*0.8,a_0*0.45,'/cloud_down.png')
    fullCloud_0(print,get.innerHeight*0.3,get.innerWidth,'web0_deep_cloud_0',get.innerHeight*0.8,get.innerHeight*0.8,a_0*0.4,'/cloud_down.png')
    print.push()
    const bg_0 = 46.66*a_1 + 30;
    const bg_1 = 0.5-0.8889*a_1**2
    const bg_this=<div key={"bg_this"} id={"bg"}style={{position:'fixed',height:'100%',width:'100%',top:"0%",left:'-2px',
        background:"Linear-gradient(180deg,rgb(0,0,0,0) 0%,rgb(255, 255, 255,"+bg_1+") "+bg_0+"%,rgba(255, 255, 255,"+(1-0.8889*a_1**2)+") 100%)"}}></div>
    let DivM_0="40%"
    if (get.innerWidth*0.4 < 600) {
        DivM_0 = "600px"
    }
    return (
        <div key={"reactSB"}>
            <div key={0} style={{'position':'fixed','top':get.innerHeight+"px"}}>
                {bg_this}
                {print}
                {DivMain("40%",DivM_0,'20%',45*(1+a_1/1.5)+'%',((1.5-a_1)**5/1.5))}
            </div>
        </div>
    );
}
export default React.memo(Jiemian0);