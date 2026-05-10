export interface Jiemian {
    innerHeight:number,
    innerWidth:number,
    scrollY:number,
    refresh:Function,
    refreshNum:boolean
}
export interface cloud_randomGET {
    left:number,
    right:number,
    innerHeight:number,
    innerWidth:number,
    scrollY:number,
    refresh:Function,
    refreshNum:boolean
}
export interface bg_star {
    x:number,
    y:number,
    x_last: number,
    y_last: number,
    x_go:number,
    y_go:number,
    width:number,
    type:number,
    real_x:number,
    real_y:number
}
/**
 * @param real_x 列表第一层
 * @param real_y 列表第二层
 * @param now_x 现在的x位置（用于渲染）
 * @param now_y 现在的y位置（用于渲染）
 * @param x_goto x预期的移动（终端x）
 * @param y_goto y预期的重点（重点y）
 * @param width 星星的大小
 * @param x_last 上一个定位点
 * @param y_last 上一个定位点
 */
export interface star_new {
    /*  这个是用于列表定位*/
    real_x:number,
    real_y:number,
    now_x:number,
    now_y:number,
    x_goto:number,
    y_goto:number,
    width:number,
    x_last:number,
    y_last:number
}