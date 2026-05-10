import React, { useEffect } from 'react'
import {useRef ,ReactNode} from 'react'
import { bg_star, Jiemian, star_new } from '../../types/global'
class The_star {
    //渲染数组
    star_map : star_new[][] = [];
    x_num=0
    y_num=0
    star_line=true
    star_lineLong = 100
    star_line_opacity = 1
    star_opacity=1
    starChange(x_num:number,y_num:number){
        if (x_num!=this.x_num || y_num !=this.y_num) {
            return true
        } else {
            return false
        }
    }
}
let last = 0//上一次的时间
let star_jianju = 80//星星的间距
let star_remove_time = 10000//ms
let star_map = new The_star();//操作对象
let lastGet : Jiemian = {innerHeight:0,innerWidth:0,scrollY:0,refresh:()=> {},refreshNum:true}
let zhujianzhuangtai = true
let jieduan = 813
let star_line_auto = true
let animation_昔涟 = true
const Background : React.FC<Jiemian> = (get) => {
    let out_put :ReactNode[] = [<div key={'0'}></div>]//0-昔涟
    let in_put :ReactNode[] = []
    //确保不会重复更新
    const canvasRef = useRef<HTMLCanvasElement>(null)//储存canvas
    let now = performance.now();//现在的时间
    let scrollY_time = window.scrollY/window.innerHeight;
    if (  lastGet.innerHeight != get.innerHeight || lastGet.innerWidth != get.innerWidth) {//刷新画布基础属性
        lastGet=get
        star_map.x_num = get.innerWidth/star_jianju+3
        star_map.y_num = get.innerHeight/star_jianju+3
        star_map.star_map=
            Array.from({length:star_map.x_num},(_,i) => 
            Array.from({length:star_map.y_num},(_,j) => ({
                real_x:i,
                real_y:j,
                now_x:i,
                now_y:j,
                x_goto:Math.sin(Math.random()*Math.PI*2)*star_jianju+i*star_jianju,
                y_goto:Math.cos(Math.random()*Math.PI*2)*star_jianju+j*star_jianju,
                width:2,
                x_last:i,
                y_last:j
            }))
        )
        star_map.star_map.forEach(
            items => {
            items.forEach(item => {
                item.x_last=item.x_goto
                item.y_last=item.y_goto
                item.now_x=item.x_goto
                item.now_y=item.y_goto
                item.x_goto=Math.sin(Math.random()*Math.PI*2)*star_jianju+item.real_x*star_jianju//前面的是偏移量
                item.y_goto=Math.cos(Math.random()*Math.PI*2)*star_jianju+item.real_y*star_jianju
            })
        })
    }
    function Main() {//主要函数
        scrollY_time = window.scrollY/window.innerHeight;
        now = performance.now();//现在的时间
        const canvas = canvasRef.current//获取画布
        if (!canvas) return false
        const ctx = canvas.getContext('2d');//获取画笔
        if (!ctx) return;
        //计算数值
        const time_go = 1+(now-last)/star_remove_time
        if (scrollY_time<3.5) {//0.8~2
            jieduan=813
            star_map.star_line=true
            star_line_auto = true
            star_map.star_opacity=1
            star_map.star_map.forEach(
                items => {
                items.forEach(
                item => {
                    if (jieduan!=813){
                        item.x_last=item.now_x
                        item.y_last=item.now_y
                        item.x_goto=Math.sin(Math.random()*Math.PI*2)*star_jianju+item.real_x*star_jianju//前面的是偏移量
                        item.y_goto=Math.cos(Math.random()*Math.PI*2)*star_jianju+item.real_y*star_jianju
                    }
                    if (time_go > 1) {
                        last=now+star_remove_time
                        item.x_last=item.now_x
                        item.y_last=item.now_y
                        item.x_goto=Math.sin(Math.random()*Math.PI*2)*star_jianju+item.real_x*star_jianju//前面的是偏移量
                        item.y_goto=Math.cos(Math.random()*Math.PI*2)*star_jianju+item.real_y*star_jianju
                    } 
                    else {
                        item.now_x = (item.x_goto-item.x_last)*time_go+item.x_last
                        item.now_y = (item.y_goto-item.y_last)*time_go+item.y_last
                    }
                }
                )
            })
            jieduan=813
        }else if (scrollY_time<1.6) {//废案，糟糕的体验
            if (jieduan !=1316) {//计算最后的目的地(仅圆形)
                jieduan=1316
                const middle_x = star_map.x_num/2
                const middle_y = star_map.y_num/2
                const circle_1316_r = window.innerHeight*0.1//半径
                const circle_n = Math.min(Math.ceil(middle_x),Math.ceil(middle_y))
                star_map.star_map.forEach(
                        items => {items.forEach(
                            item => {
                                const op_x = item.real_x-middle_x <0?Math.floor(item.real_x-middle_x):Math.ceil(item.real_x-middle_x);//整数
                                const op_y = item.real_y-middle_y <0?Math.floor(item.real_y-middle_y):Math.ceil(item.real_y-middle_y);
                                const n = Math.max(Math.ceil(Math.abs(op_x)),Math.ceil(Math.abs(op_y)))//第n圈
                                let angle=0//0~1
                                if (op_x == -n) {
                                    angle=op_y/n*0.125+0.125
                                } else if (op_x == n) {
                                    angle=op_y/n*0.125+0.625
                                } else if (op_y == n) {
                                    angle=+op_x/n*0.125-0.125
                                } else if (op_y == -n) {
                                    angle=op_x/n*0.125+0.375
                                }
                                item.x_goto=Math.cos(angle*Math.PI*2)*circle_1316_r*n/circle_n+window.innerWidth*0.5
                                item.y_goto=Math.sin(angle*Math.PI*2)*circle_1316_r*n/circle_n+window.innerHeight*0.6
                                item.x_last=item.now_x
                                item.y_last=item.now_y
                            })
                        }
                    )
                }
            if (scrollY_time<1.6) {
                star_map.star_map.forEach(
                    items => {
                    items.forEach(item => {
                        item.now_x=(item.x_goto-item.x_last)*(scrollY_time-1.3)/0.3+item.x_last
                        item.now_y=(item.y_goto-item.y_last)*(scrollY_time-1.3)/0.3+item.y_last
                    })
                    }
                )
            star_map.star_line=true
            star_line_auto = false
            star_map.star_line_opacity=1-(scrollY_time-1.3)/0.3
            star_map.star_opacity=1-(scrollY_time-1.3)/0.3
            }
        }
        //渲染
        ctx.clearRect(0, 0, canvas.width, canvas.height)//清理画布
        star_map.star_map.forEach(
            items => {
            items.forEach(item => {
                ctx.beginPath()
                ctx.fillStyle='rgba(255,255,255,'+star_map.star_opacity+')'//这里可以设置星星闪闪
                ctx.arc(item.now_x,item.now_y,item.width,0,Math.PI*2)
                ctx.fill()
                if (star_map.star_line) {//如果需要连线
                    for (let i=0;i<=4;i++){
                        for (let j =0;j<=4-i;j++){
                            if (star_map.star_map?.[item.real_x+i]?.[item.real_y+j]) {
                                const op_line = ((item.now_x-star_map.star_map[item.real_x+i][item.real_y+j].now_x)**2 + 
                                                 (item.now_y-star_map.star_map[item.real_x+i][item.real_y+j].now_y)**2
                                                )**0.5
                                if (op_line < star_map.star_lineLong) {
                                    ctx.beginPath()
                                    ctx.moveTo(item.now_x,item.now_y)
                                    if (star_line_auto) {
                                        ctx.strokeStyle = 'rgba(255,255,255,'+((1-op_line/star_map.star_lineLong)*0.8)+')'
                                    } else {
                                        ctx.strokeStyle = 'rgba(255,255,255,'+star_map.star_line_opacity+')'
                                    }
                                    
                                    ctx.lineTo(star_map.star_map[item.real_x+i][item.real_y+j].now_x,star_map.star_map[item.real_x+i][item.real_y+j].now_y)
                                    ctx.stroke()
                                }
                            }
                        }
                    }
                }
            })
        })
        if (zhujianzhuangtai) {
            requestAnimationFrame(Main)
        }
    }
    
    //渲染
    useEffect(
        () => {
            zhujianzhuangtai=true
            Main()
            return ()=> {
                zhujianzhuangtai=false
            }
        },[]
    )
    return(
        <div key={'0'}>
            {in_put}
            <canvas 
            ref={canvasRef}
            width={get.innerWidth}
            height={get.innerHeight}
            style={{ 
                top:'0px',
                position:'fixed',
                left:'0px',
                }
            }
            key={1}
            />
            {out_put}
        </div>
    )
}
export default React.memo(Background)