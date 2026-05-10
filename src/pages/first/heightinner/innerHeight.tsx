import {ReactNode} from 'react';
import { OnlyUse } from '../../../components/OnlyUse';
import {unuse} from '../cloud.tsx'
import './innerHeight.css';
import React from 'react';
import { Jiemian } from '../types/global';

let print : ReactNode[];
const FirstWeb = new OnlyUse();//第一个界面的初始动画
print = [];
const InnerHeightList_0 :React.FC<Jiemian> = (get) => {
    if (FirstWeb.haveused) {
        FirstWeb.use();
        print[0] = 
            <div key = {0} style={{position:"fixed",top: "10%",left: "10%",height: "100px",width: "100px"}}>
                {unuse('100px','100px')}
            </div>
        new Promise((resolve) => {setTimeout(resolve,5000)})
        .then(() => {print.splice(0,1);})
        .then(() => {
            print[1] = 
            <div key={1} style={{position:"fixed",top: get.innerHeight*0.2+'px',left: get.innerWidth*0.5+'px',height: get.innerHeight*0.4+'px',width: get.innerWidth*0.45 + 'px'}} className='open_0'>
                {unuse('100%','100%')}
            </div>
        })
        .then(() => {get.refresh(!get.refreshNum);})
    }
    return (
        <div key={0}>
            {print}
        </div>
    )
}
export default React.memo(InnerHeightList_0);