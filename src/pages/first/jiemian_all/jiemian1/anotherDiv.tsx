import React, { useState } from 'react'
import {ReactNode} from 'react'
import { Jiemian } from '../../types/global'
import './for_Div.css';
import {jiemian1} from '../../txt.json'
import '../../txt.json'
let animation_昔涟=true
const Anotherdiv : React.FC<Jiemian> = (get) => {
    let output = [<div key={0}></div>,<img alt="hand" key='1'/>,<img alt="1" key='2'/>,<img alt="1" key='3'/>,<div key='4'></div>]
    let under : ReactNode[] = []
    const scrollY_time = scrollY/innerHeight;
    if (scrollY_time <=1.6) {//0.8~1.6
        output[0]=(
            <div key={0} style={{position:'fixed',left:'20%',top:(40-30*(scrollY_time-0.8)*2)<10?'10%':(40-30*(scrollY_time-0.8)*2+'%'),width:'60%',height:'80%',opacity:scrollY_time<1.3? 0.8*(scrollY_time-0.8)*2 : scrollY_time<1.5?0.8:0.8*((1.8-scrollY_time)/0.3)**10,backgroundColor:'rgb(75, 46, 92)',borderRadius:'20px'}}>
                <div style={{position:'absolute',left:'-30px',top:'-25px',height:'371px',width:'385px'}}>
                    <img alt="" src="public\左上.png" style={{height:'50%',left:'50%'}}/>
                </div>
                <div style={{position:'absolute',right:'-45px',bottom:'-25px',height:'185.5px',width:'192.5px'}}>
                    <img alt="" src="public\右下.png" style={{height:'100%',left:'100%'}}/>
                </div>
                <div style={{position:'absolute',left:'50px',top:'50px',color:'rgb(255, 255, 255)',right:'50px'}}>
                    {jiemian1[0]}
                </div>
            </div>
        )
    }
    if (scrollY_time>1.55 && scrollY_time<1.95) {
        output[1]=<img 
            key='1'
            alt="昔涟0" 
            src="public\昔涟_0.png" 
            style={{
                position:'fixed',
                bottom:scrollY_time<1.75?375*scrollY_time-641.25+'vh':-75*scrollY_time+146.25+'vh',
                left:scrollY_time<1.75?'10vw':50*scrollY_time-77.5+'vw',
                width:scrollY_time<1.75?'80vw':-100*scrollY_time+255+'vw',
                opacity:scrollY_time<1.75?5*scrollY_time-7.75:1
            }}
            />
    }
    if (scrollY_time>1.75 && scrollY_time<2.4) {
        output[2]=<img 
            key='2'
            alt="昔涟0" 
            src="public\昔涟_1.png" 
            style={{
                position:'fixed',
                bottom:scrollY_time<1.95?-75*scrollY_time+146.25+'vh':'0vh',
                left:scrollY_time<1.95?50*scrollY_time-77.5+'vw':'20vw',
                width:scrollY_time<1.95?-100*scrollY_time+255+'vw':(60)+'vw',
                opacity:scrollY_time<1.95?5*scrollY_time-8.75:(scrollY_time<2.2?1:-5*scrollY_time+12)
            }}/>
    }
    if (scrollY_time>1.55){
        if (scrollY_time<2.2) {
            output[3]=<img 
                key='3'
                alt="" 
                src="public\星球.png" 
                style={{
                    position:'fixed',
                    bottom:scrollY_time<1.75?-300*scrollY_time+565+'vh':scrollY_time<2?-160*scrollY_time+320+'vh':'0vh',
                    left:scrollY_time<1.75?'30vw':scrollY_time<1.85?50*scrollY_time-57.5+'vw':'35vw',
                    width:scrollY_time<1.75?'40vw':scrollY_time<1.85?-100*scrollY_time+215+'vw':'30vw',
                    height:scrollY_time<1.75?'40vw':scrollY_time<1.85?-100*scrollY_time+215+'vw':'30vw',
                    opacity:scrollY_time<1.75?5*scrollY_time-7.75:1
                }}/>
        } else {
            output[3]=<img 
                key='3'
                alt="" 
                src="public\星球.png" 
                style={{
                    position:'fixed',
                    bottom:scrollY_time<2.4?-75*scrollY_time+165+'vh':-15+'vh',
                    left:scrollY_time<2.4?(get.innerWidth-(400*scrollY_time-850)*get.innerHeight)/2+'px':(get.innerWidth-1.1*get.innerHeight)/2+'px',
                    width:scrollY_time<2.4?400*scrollY_time-850+'vh':'110vh',
                    height:scrollY_time<2.4?400*scrollY_time-850+'vh':'110vh',
                    opacity:scrollY_time<1.75?5*scrollY_time-7.75:1
                }}/>
        }
    }
    if (scrollY_time>=1.8) {
        let a : ReactNode[] =[]
        for (let num = 0;num<34;num++) {
            a.push(<div key={num} style={{position:'relative',top:'2vh',color:'rgb(255,255,255)',fontSize:'2vw'}} className="text-overlay">{jiemian1.another[num]}</div>)
        }
        under.push(<div key='4' style={{position:'fixed',top:'2vh',display:'flex',opacity:5*scrollY_time-9}}>
            {a}
        </div>
        )
    }
    return(<div>
        {under}
        {output}
    </div>)
}
export default React.memo(Anotherdiv)
