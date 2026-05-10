import "./cloud.css";
const cloud_small_1 = (height:string,width:string) => {
    return (
        <div style={{"position":"absolute","top":"0%","left":"0%","borderRadius":"50%","backgroundColor":"rgb(240,248,255)","height":height,"width":width,"border":"3px solid black","overflow":"hidden"}}>
            <div style={{"position":"absolute","backgroundColor":"rgb(180,210,230)","height":"100%","width":"100%","borderRadius":"50%"}}></div>  
            <div style={{"position":"absolute","backgroundColor":"rgb(160,210,230)","height":"100%","width":"100%","top":"-8%","left":"4%","borderRadius":"50%"}}></div>  
            <div style={{"position":"absolute","backgroundColor":"rgb(240,248,255)","height":"100%","width":"100%","top":"-20%","left":"10%","borderRadius":"50%"}}></div>  
        </div>  
    );
}
const cloud_middle_1 = (height:string,width:string) => {
    return (
        <div style={{"position" : "absolute","height":height,"width":width}}>
        <div style={{"position":"absolute","top":"5%","left":"12%","height":"45%","width":"45%","backgroundColor":"rgb(240,248,255)"}} className="cloud_one"></div>
        <div style={{"position":"absolute","top":"10%","left":"10%","height":"55%","width":"55%","backgroundColor":"rgb(180,210,230)"}} className="cloud_one">
            <div style={{"position":"absolute","top":"-30%","left":"-15%","height":"100%","width":"130%","backgroundColor":"rgb(240,248,255)","borderRadius":"50%"}}></div>
        </div>
        <div style={{"position":"absolute","top":"15%","left":"65%","height":"15%","width":"15%","backgroundColor":"rgb(180,210,230)"}} className="cloud_one">
            <div style={{"position":"absolute","backgroundColor":"rgb(240,248,255)","height":"80%","width":"120%","top":"-10%","left":"-5%","borderRadius":"50%"}}></div>
        </div>
        <div style={{"position":"absolute","top":"32%","left":"40%","height":"35%","width":"35%","backgroundColor":"rgb(180,210,230)"}} className="cloud_one">
            <div style={{"position":"absolute","backgroundColor":"rgb(240,248,255)","height":"80%","width":"120%","top":"-10%","left":"-5%","borderRadius":"50%"}}></div>
        </div>
        <div style={{"position":"absolute","height":"35%","width":"35%","left":"-7%","top":"48%","transform":"rotate(45deg)","overflow":"hidden"}}>
            <div className="cloud_one" style={{"position":"absolute","top":"-50%","height":"95%","width":"95%","backgroundColor":"rgb(180,210,230)"}}></div>
        </div>
        <div style={{"position":"absolute","top":"50%","left":"0%","height":"20%","width":"20%","backgroundColor":"rgb(180,210,230)"}} className="cloud_one">
            <div style={{"position":"absolute","backgroundColor":"rgb(240,248,255)","height":"80%","width":"120%","top":"-10%","left":"-5%","borderRadius":"50%"}}></div>
            <div style={{"position":"absolute","backgroundColor":"rgb(180,210,230)","height":"150%","width":"150%","top":"-90%","left":"49%","borderRadius":"50%"}}></div>
        </div>
        <div style={{"position":"absolute","top":"25%","left":"15%","height":"15%","width":"15%","backgroundColor":"rgb(180,210,230)"}} className="cloud_one">
           <div style={{"position":"absolute","backgroundColor":"rgb(240,248,255)","height":"80%","width":"120%","top":"-10%","left":"-5%","borderRadius":"50%"}}></div>
        </div>
        <div style={{"position":"absolute","height":"20%","width":"34%","top":"45%","left":"4%","transform":"rotate(45deg)","overflow":"hidden"}}>
            <div style={{"position":"absolute","backgroundColor":"rgb(114, 128, 141)","borderRadius":"50%","height":"340%","width":"200%","top":"10%","left":"-50%","maskImage":"radial-gradient(circle,transparent 67%,black 0%,black 100%,transparent 100%)"}}></div>
        </div>
        <div style={{"position":"absolute","top":"48%","left":"67%","height":"18%","width":"18%","backgroundColor":"rgb(180,210,230)"}} className="cloud_one">
            <div style={{"position":"absolute","backgroundColor":"rgb(240,248,255)","height":"80%","width":"120%","top":"-10%","left":"-5%","borderRadius":"50%"}}></div>
        </div>
    </div>
    );
}
const cloud_small_ai_1 = (height:string,width:string) => {
    return (
        <svg width={width} height={height} viewBox="0 0 200 100">
                 <path
                d="
                M160,70 
                C180,70 190,55 180,40 
                C170,25 150,25 135,30 
                C120,15 90,15 75,30 
                C60,15 30,15 20,40 
                C10,65 30,75 50,75 
                C70,75 140,75 160,70 
                Z
                "
                fill="#ffffff"
                stroke="#000"
                stroke-width="2"
            />
            </svg>
    )
}
const cloud_middle_2 = (height:string,width:string) => {
    return (
        <div style={{'position':'absolute','height':height,'width':width}}>
        <div style={{"position":"absolute","top":"30%","left":"26%","height":"30%","width":"30%","backgroundColor":"rgb(180,210,230)"}} className="cloud_one">
            <div style={{"position":"absolute","top":"-50%","left":"-15%","height":"100%","width":"130%","backgroundColor":"rgb(240,248,255)","borderRadius":"50%"}}></div>
            <div style={{"position":"absolute","top":"-20%","left":"-65%","height":"100%","width":"130%","backgroundColor":"rgb(180,210,230)","borderRadius":"50%"}}></div>
        </div>
        <div style={{"position":"absolute","top":"20%","left":"3%","height":"40%","width":"40%","backgroundColor":"rgb(180,210,230)"}} className="cloud_one">
            <div style={{"position":"absolute","top":"-30%","left":"-15%","height":"100%","width":"130%","backgroundColor":"rgb(240,248,255)","borderRadius":"50%"}}></div>
        </div>
        <div style={{"position":"absolute","top":"45%","left":"4%","height":"16%","width":"16%","backgroundColor":"rgb(180,210,230)"}} className="cloud_one">
            <div style={{"position":"absolute","top":"-30%","left":"-15%","height":"100%","width":"130%","backgroundColor":"rgb(180,210,230)","borderRadius":"50%","overflow":"hidden"}}>
                <div style={{"position":"absolute","top":"35%","left":"-25%","height":"100%","width":"100%","borderRadius":"50%","backgroundColor":"rgb(240,248,255)"}}></div>
            </div>
        </div>
        <div style={{"position":"absolute","top":"55%","left":"3%","height":"8%","width":"8%","backgroundColor":"rgb(180,210,230)"}} className="cloud_one">
            <div style={{"position":"absolute","top":"-30%","left":"-15%","height":"100%","width":"130%","backgroundColor":"rgb(240,248,255)","borderRadius":"50%"}}></div>
        </div>
        <div style={{"position":"absolute","top":"48%","left":"56%","height":"10%","width":"30%","backgroundColor":"rgb(180,210,230)"}} className="cloud_one">
            <div style={{"position":"absolute","top":"-30%","left":"-15%","height":"100%","width":"130%","backgroundColor":"rgb(240,248,255)","borderRadius":"50%"}}></div>
        </div>
        <div style={{"position":"absolute","top":"38%","left":"45%","height":"22%","width":"22%","backgroundColor":"rgb(180,210,230)"}} className="cloud_one">
            <div style={{"position":"absolute","top":"-30%","left":"-15%","height":"100%","width":"130%","borderRadius":"50%","overflow":"hidden"}}>
                <div style={{"position":"absolute","backgroundColor":"rgb(240,248,255)","left":"35%","top":"10%","width":"120%","height":"120%","borderRadius":"50%"}}></div>
            </div>
        </div>
        <div style={{"position":"absolute","top":"27%","left":"10%","height":"8%","width":"15%","backgroundColor":"rgba(100, 120, 140, 0.637)","borderRadius":"50%","transform":"rotate(-45deg)"}}></div>
        <div style={{"position":"absolute","top":"18%","left":"8%","height":"15%","width":"15%","backgroundColor":"rgb(180,210,230)","borderRadius":"50%"}} >
            <div style={{"position":"absolute","top":"-25%","left":"-45%","height":"200%","width":"100%","overflow":"hidden","transform":"rotate(45deg)"}}>
                <div style={{"position":"absolute","borderRadius":"50%","top":"0%","left":"10%","backgroundColor":"rgb(180,210,230)","height":"50%","width":"100%","border":"2px solid black","overflow":"hidden"}}>
                    <div style={{"position":"absolute","borderRadius":"50%","height":"100%","width":"100%","backgroundColor":"rgb(240,248,255)","left":"-13%","top":"-17%"}}></div>
                </div>
            </div>
        </div>
    </div>
    )
}
const unuse = (height:string,width:string) => {
    return (
        <div style={{"position":"absolute","height":height,"width":width,"backgroundColor":"rgb(2, 255, 36)"}}></div>
    )
}

export {cloud_small_1,
    cloud_middle_1,
    cloud_small_ai_1,
    cloud_middle_2,
    unuse
};
///这个没用