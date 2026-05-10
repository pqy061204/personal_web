import { FC, ReactNode, use, useEffect, useState } from 'react';
import {cloud_middle_1,cloud_small_1,cloud_middle_2,unuse} from './cloud.tsx';
import InnerHeightList_0 from './heightinner/innerHeight.tsx';
import Jiemian0 from './jiemian_all/jiemian0/jiemian0.tsx';///////
import './cloud.css';
import React from 'react';
import Jiemian1 from './jiemian_all/jiemian1/jiemian1.tsx';

export const random = Math.random();

let needRefreshDiv : ReactNode [] = [];
let needRefreshDivFunc : Function[] = [];
function AppendDiv(need: Function) {
    needRefreshDivFunc.push(need);
}
function refreshDiv(innerHeight:number,innerWidth:number,scrollY:number) {
    for (let i = 0; i < needRefreshDivFunc.length; i++) {
        needRefreshDivFunc[i](innerHeight,innerWidth,scrollY);
    }
}
let App_jiemian = 0
const Bgound = () => {
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);//高
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);//宽
    const [scrollY, setScrollY] = useState(window.scrollY);//垂直滚动距离
    const [refresh, setRefresh] = useState(true);//刷新
    const listen_resize = () => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
    }
    const listen_scroll = () => {
        setScrollY(window.scrollY);
    }
    let inner : ReactNode[] ;

    let gdcolor = 'rgb(47, 255, 0)';//背景颜色
    inner = [];
    App_jiemian = 0;
    if (scrollY < innerHeight*0.8) {//界面1
        App_jiemian = 0;
        inner.push(
            <Jiemian0 
                key="jiemian0"
                innerHeight={innerHeight}
                innerWidth={innerWidth}
                scrollY={scrollY}
                refresh={setRefresh}
                refreshNum={refresh}
            />
        );
        //背景
        let a =1 - (scrollY / innerHeight)**5;
        gdcolor = 'rgb(' + (111 * a) + ',' + (202 * a) + ',' + (218 * a) + ')';
    } else if (scrollY < innerHeight *1.5) {//界面一与界面二的过渡
        App_jiemian = 0.1;
        inner.push(
            <Jiemian0 
                key="jiemian0"
                innerHeight={innerHeight}
                innerWidth={innerWidth}
                scrollY={scrollY}
                refresh={setRefresh}
                refreshNum={refresh}
            />
        );
        inner.push(
            <Jiemian1 
                key="jiemian1"
                innerHeight={innerHeight}
                innerWidth={innerWidth}
                scrollY={scrollY}
                refresh={setRefresh}
                refreshNum={refresh}
            />
        );
        
        let a =1 - (scrollY / innerHeight)**5;
        gdcolor = 'rgb(' + (111 * a) + ',' + (202 * a) + ',' + (218 * a) + ')';
    }else if (scrollY < innerHeight * 3.5) {//界面二，界面二与界面三的过渡
        App_jiemian = 1;
        inner.push();
        inner.push(
            <Jiemian1 
                key="jiemian1"
                innerHeight={innerHeight}
                innerWidth={innerWidth}
                scrollY={scrollY}
                refresh={setRefresh}
                refreshNum={refresh}
            />
        );
        //过渡区分
        if (scrollY / innerHeight < 2.5) {
            gdcolor = 'rgb(0,0,0)';
        } else{
            let a = -((2.5 - scrollY / innerHeight)**7);
            gdcolor = 'rgb(' + (193 * a) + ',' + (44 * a) + ',' + (21 * a) + ')';
        }
    } else if (scrollY <= innerHeight * 5) {//界面二与界面三的过渡，界面三
        App_jiemian = 2;
        inner.push();
        //背景
        gdcolor = 'rgb(193, 44, 21)';
    }
    //初始化
    useEffect(() => {
        window.addEventListener('resize', listen_resize);
        window.addEventListener('scroll', listen_scroll);
        return () => {
            window.removeEventListener('resize', listen_resize);
            window.removeEventListener('scroll', listen_scroll);
    };
    },[]);
    //只运行一次
    let webHeightList: ReactNode[];
    webHeightList = [];
    /*webHeightList.push(
            <InnerHeightList_0
                key="innerHeightList_0"
                innerHeight={innerHeight}
                innerWidth={innerWidth}
                scrollY={scrollY}
                refresh={setRefresh}
                refreshNum={refresh}
            />
    );//开场动画*/
    //输出
    refreshDiv(innerHeight,innerWidth,scrollY);
    /*
    *确定移动范围
    *背景色
    *主要内容
    *开场动画
    *其他
    */
    return (
        <main>
        <div id={"background"} style={{top: 0, left: 0, width: '100%', height: `${innerHeight * 5}px`,backgroundColor:`rgba(0,0,0,1)`}}></div>
        <div style={{position: 'fixed',top: 0,left: 0,width: `${innerWidth}px`,height: `${innerHeight}px`,backgroundColor:`${gdcolor}`}}></div>
        {inner}
        {webHeightList}
        {needRefreshDiv}
        <div style={{position:'fixed',background:'rgb(255, 238, 0)',opacity:0.5,top:'0px',left:'0px'}}>
            <div>scrollY:{scrollY}</div>
            <div>比值:{scrollY/innerHeight}</div>
            <div>innerWidth:{innerWidth}</div>
            <div>界面：{App_jiemian}</div>
        </div>
        </main>
    );
}
export default React.memo(Bgound);
export{AppendDiv,App_jiemian};