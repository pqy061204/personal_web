import { bg_star } from "./types/global";

let zhishu : number[] = [2];
function isZhishu (num:number) {
    if (num <= 1) {return false}
    if(num > zhishu[zhishu.length-1]) {
        for(let i = zhishu[zhishu.length-1];i<=num;i++){
            let can = true;
            for(let j of zhishu) {
                if (i%j==0) {
                    can=false;
                    break;
                }
            }
            if (can) {
                zhishu.push(i)
                if(i==num) {
                    return true
                }
            }
        }
    } else if (zhishu.includes(num)) {
        return true
    } else {return false}
}
/**
 * @file 0是空白1是质数,写的最大值,不到达边界
 * @param seed 种子，窗口偏移速度，不能小于0
 * @param long 高的个数
 * @param width 宽的个数
 * @param 注意：是0~int(w)的
 */
export const Random_2D = (seed:number,long:number,width:number) => {
    let op = Math.floor(seed*long+1);
    isZhishu((seed+width+1)*long);
    let print : bg_star[][] = []//其实可以把2的倍数去除的，但太麻烦了，不要了,提前去除
    for(let i = 0;i<=width;i++) {
        print[i] = [];
        for (let j = 0;j<=long;j++) {
            op+=1
            console.log(op)
            if(zhishu.includes(op)) {
                print[i][j] = {x:i,y:j,x_go:i,y_go:j,type:1,width:5};
                console.log("here")
            }else {
                print[i][j] = {x:i,y:j,x_go:i,y_go:j,type:0,width:5};
            }
        }
    }
    console.log(print)
    return(print)
}
