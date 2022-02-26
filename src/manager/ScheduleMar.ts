//计时器管理类
const {ccclass, property} = cc._decorator;

@ccclass
export default class ScheduleMar extends cc.Component {


    private static _instance : ScheduleMar;//
    private intervalMap:{};//关闭定时器标志
    private timeOutMap:{};//关闭定时器标志

    init(){
        this.intervalMap = {}
        this.timeOutMap = {}
    }

    public static getInstance(){
        if(! ScheduleMar._instance ){
            ScheduleMar._instance = new ScheduleMar();
        }
        return ScheduleMar._instance
    }
    
    // schedule(func:Function, caller:any, time:number){
    //     cc.director.getScheduler().schedule(func, caller, time);
    // }
    
    setInterval(str:string ,func:Function, time:number, arg?:any){
        this.intervalMap[str] = func;
        this.schedule(func, time);
    }

    closeSetInterval(str){
        this.unschedule(this.intervalMap[str]);
    }

    setTimeout(str:string, func:Function, time:number){
        this.timeOutMap[str] = func;
        this.scheduleOnce(func, time);
    }

    clearTimeout(str:string){
        this.unschedule(this.timeOutMap[str]);
    }
    // update (dt) {}
}
