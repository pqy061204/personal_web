import {ReactNode} from 'react'
import { loadData } from '@/components/read_load';
import jiemian0DATA from '../../txt.json';
/**
 * @param print 要输出的列表
 * @param left 各个div的间隔
 * @param cloudDiv 云朵
 * @param innerWidth 窗口宽度
 * @param animation 动画
 * @param cloudWidth 云的width
 * @param cloudHeight 云的height
 * @param top 云的距离底部的距离
 * @param cloudName 云的相对路径
 */
function fullCloud_0(print:ReactNode[],left:number,innerWidth:number,animation:string,cloudWidth:number,cloudHeight:number,top:number,cloudName:string) {
    let put : ReactNode[] = [];
    const num = innerWidth / left
    for (let i=-1;i <num+1 ;i+=1) {
        put.push(
            <div key={put.length} style={{"position":"absolute","left":left*i}}>
                <img 
                key={0}
                src={cloudName}
                loading='lazy'
                alt='云'
                style={{height:cloudHeight,width:cloudWidth}}/>
            </div>
        )
    }
    print.push(
        <div key={print.length} style={{"position":"absolute",top:-top + "px"}} className={animation}>
            {put}
        </div>
    )
}
/**
 * @this 一个组件
 * @param height 
 * @param width 
 * @param top
 * @param left
 * @returns ReactNode
 */
const DivMain =(height:string,width:string,top:string,left:string,opacity:number) => {
    return (
        <div key={'DivMain'} style={{position:'fixed',top:top,left:left,height:height,width:width,backgroundColor:"rgb(0, 191, 255,"+opacity*0.3+")",borderRadius:"30px"}}>
            <div style={{position:'relative',height:'90%',width:'90%',left:'5%',top:'5%',overflow:'hidden'}}>
                <h2 style={{opacity:opacity}}>{jiemian0DATA.jiemian0.first}</h2>
                <h3 style={{position:"relative",margin:"0px",opacity:opacity}}>{jiemian0DATA.jiemian0.second}</h3>
                <div style={{position:"relative",margin:"0px",opacity:opacity}}>{jiemian0DATA.jiemian0.a_3}</div>
            </div>
        </div>
    )
}
export {fullCloud_0,DivMain}