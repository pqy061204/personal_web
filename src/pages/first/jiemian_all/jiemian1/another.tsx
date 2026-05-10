import React from 'react'
import {ReactNode , useEffect ,useRef} from 'react'
import { bg_star, Jiemian } from '../../types/global';
import { Random_2D } from '../../random';
import { OnlyUse } from '../../../../components/OnlyUse';
import { random } from '../../App';
import { App_jiemian } from '../../App';
let reset : Jiemian = {innerHeight:0,innerWidth:0,scrollY:0,refresh:Function,refreshNum:true}

let mapStar : bg_star[][]
//配制（星星）
const star_line = 80//星星的间距
const star_remove_time = 10000//ms
const star_line_combine = 80//星星连线的距离
const only = new OnlyUse()
let window_shuxing
const Bg_star : React.FC<Jiemian> = (get) => {
    console.log("Bg_star_bigine")
    const canvasRef = useRef<HTMLCanvasElement>(null)//定义canvas(储存canvas)
    const star_x_num = Math.floor(get.innerWidth/star_line)+3
    const star_y_num = Math.floor(get.innerHeight/star_line)+3
    const last = useRef(0);
    const star_map = useRef(
        Array.from({length:star_x_num},(_,i) => 
        Array.from({length:star_y_num},(_,j) => ({
            x:i,
            y:j,
            x_go:Math.sin(Math.PI/180*(Math.random()*performance.now()))*star_line*0.8,
            y_go:Math.cos(Math.PI/180*(Math.random()*performance.now()))*star_line*0.8,
            x_last:-Math.sin(Math.PI/180*(Math.random()*performance.now()))*star_line*0.8,
            y_last:-Math.cos(Math.PI/180*(Math.random()*performance.now()))*star_line*0.8,
            width:2,
            type:1
        }))))
    useEffect(()=>{
        console.log("useEffect_bigine")
        star_map.current =Array.from({length:star_x_num},(_,i) => 
        Array.from({length:star_y_num},(_,j) => ({
            x:i,
            y:j,
            x_go:Math.sin(Math.PI/180*(Math.random()*performance.now()))*star_line*0.8,
            y_go:Math.cos(Math.PI/180*(Math.random()*performance.now()))*star_line*0.8,
            x_last:-Math.sin(Math.PI/180*(Math.random()*performance.now()))*star_line*0.8,
            y_last:-Math.cos(Math.PI/180*(Math.random()*performance.now()))*star_line*0.8,
            width:2,
            type:1
        }))
    )})
    function bg_star() {//背景画布
        console.log("draw")
        const canvas = canvasRef.current;//获取画布
        if (!canvas) return false;
        const ctx = canvas.getContext('2d');//获取画笔
        if (!ctx) return false;
        const now = performance.now();//现在的时间
        last.current //之前的数据
        ctx.clearRect(0,0,canvas.width,canvas.height)//q清理画布
        if(now>=last.current+star_remove_time){//转换星星位置
            last.current = now
            star_map.current.forEach((items)=>{
                    items.forEach((item) => {
                        item.x_last=item.x_go
                        item.y_last=item.y_go
                        item.x_go=Math.sin(Math.PI/180*(Math.random()*performance.now()))*star_line*0.5
                        item.y_go=Math.cos(Math.PI/180*(Math.random()*performance.now()))*star_line*0.5
                        item.width=2
                    })
                })
        }
        const star_opacity = () => {//星星闪闪
            const a = ((now -last.current)/star_remove_time)
                        if(a > 0.5) {
                        return(1-a)
                        } else {return a}
        }
        const star_width_change = (big:number) => {//星星的大小改变
            const a = (now -last.current)/star_remove_time;
            if (a*2>1) {
                return -a*(big-1)
            } else {
                return -(1-a)*(big-1)
            }
        }
        star_map.current.forEach((items) =>{//渲染
            items.forEach((item) => {
                ctx.beginPath()
                ctx.fillStyle='rgba(255,255,255,'+1+')'//这里可以设置星星闪闪
                console.log((now -last.current)/star_remove_time)
                let x_move : number
                let y_move : number
                if (now<=last.current+star_remove_time && item.x_last &&item.y_last) {
                    x_move = (item.x_go - item.x_last)*((now -last.current)/star_remove_time)+item.x_last
                    y_move = (item.y_go - item.y_last)*((now -last.current)/star_remove_time)+item.y_last
                }else{
                    x_move=0
                    y_move=0
                }
                const item_x = item.x*star_line+x_move
                const item_y = item.y*star_line+y_move
                ctx.arc(item_x,item_y,item.width,0,Math.PI*2)
                ctx.fill()
                for (let line_x_0=-4+item.x ;line_x_0 <= 4+item.x;line_x_0+=1) {//画连线
                    for (let line_y_0=-4+item.y;line_y_0 <=4+item.y;line_y_0+=1) {
                        const line_star = star_map.current?.[line_x_0]?.[line_y_0];
                        if (line_star) {
                            const line_x = line_star.x*star_line+(line_star.x_go - line_star.x_last)*((now -last.current)/star_remove_time)+line_star.x_last
                            const line_y = line_star.y*star_line+(line_star.y_go - line_star.y_last)*((now -last.current)/star_remove_time)+line_star.y_last
                            const line_juli = ((line_x-item_x)**2 + (line_y-item_y)**2)**0.5
                            if (line_juli < star_line_combine) {
                                ctx.beginPath()
                                ctx.moveTo(item_x,item_y)
                                ctx.strokeStyle = 'rgba(255,255,255,0.3)'
                                ctx.lineTo(
                                    line_star.x*star_line+(line_star.x_go - line_star.x_last)*((now -last.current)/star_remove_time)+line_star.x_last,
                                    line_star.y*star_line+(line_star.y_go - line_star.y_last)*((now -last.current)/star_remove_time)+line_star.y_last)
                                ctx.stroke()
                            }
                        }
                    }
                }
            })
        })
        requestAnimationFrame(bg_star);
    }
        useEffect(() =>{
            bg_star()
        },[])
        return(
        <canvas 
        ref={canvasRef}
        width={get.innerWidth}
        height={get.innerHeight}
        style={{ 
            top:'0px',
            position:'fixed',
            left:'0px',
        }}
        />
    )
}
export default React.memo(Bg_star) ;