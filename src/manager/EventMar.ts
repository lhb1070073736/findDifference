//全局事件类
const { ccclass, property } = cc._decorator;

@ccclass
export default class EventMar {

    private static _instance: EventMar;//

    constructor() {

    }

    public static getInstance() {
        if (!EventMar._instance) {
            EventMar._instance = new EventMar();
        }
        return EventMar._instance
    }

    public eventEmit(str,  arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) {
        cc.director.emit(str,  arg1, arg2, arg3, arg4, arg5)
    }

    public eventOn(str: string, callback:Function, target?: any, useCapture?: boolean){
        cc.director.on(str,  callback, target, useCapture)
    }

    public eventOff(type: string, callback?: Function, target?: any){
        cc.director.off(type, callback, target)
    }
    // update (dt) {}
}
