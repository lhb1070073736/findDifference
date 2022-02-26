//计时器管理类
const {ccclass, property} = cc._decorator;

@ccclass
export default class TimerMar {


    private static _instance : TimerMar;//
    private intervalMap:{};//关闭定时器标志
    private timeOutMap:{};//关闭定时器标志

    init(){
        this.intervalMap = {}
        this.timeOutMap = {}
    }

    public static getInstance(){
        if(! TimerMar._instance ){
            TimerMar._instance = new TimerMar();
        }
        return TimerMar._instance
    }
    
    schedule(func:Function, caller:any, time:number){
        cc.director.getScheduler().schedule(func, caller, time);
    }
    
    setInterval(str:string ,func:Function, time:number, arg?:any){
        time = time * 1000;
        this.intervalMap[str] =  setInterval(func,time, arg)
    }

    closeSetInterval(str){
        clearInterval(this.intervalMap[str]);
    }

    setTimeout(str:string, func:Function, time:number){
        time = time * 1000;
        this.timeOutMap[str] = setTimeout(func, time)
    }

    clearTimeout(str:string){
        clearTimeout(this.timeOutMap[str]);
    }
    // update (dt) {}
}
