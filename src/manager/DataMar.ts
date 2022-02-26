import Tools from "../common/Tools";
import { DataConfig } from "./DataConfig";

//玩家数据管理类
const { ccclass, property } = cc._decorator;

@ccclass
export default class DataMar {


    public dataObj: {

         coin: number;//金币
         health: number;//体力

    
         signDay: number;//已经签到的天数
         signDate: object;//上一次签到的日期 day
         offlineDate: object;//离线时间日期 day
         freeRewardDate: object;//上免费奖励时间  右下角明日可领取 day

         offlineDateStamp: number;//离线时间戳

         level:number;//当前关卡
         dDengJi:number;//当前大等级
         xDengJi:number;//当前小等级

         isOpenVibrete:boolean;//是否开启振动
         isOpenSound:boolean;//是否开启音效


    }//数据对象

    private static _instance: DataMar;

    constructor() {
    }


    public init() {
        this.getDataObjJson();       
    }

    public static getInstance() {
        if (!DataMar._instance) {
            DataMar._instance = new DataMar();
        }
        return DataMar._instance
    }

    public setDataObjJson() {
        this.setItem("dataObj", JSON.stringify(this.dataObj))
        console.log("JSON++++",JSON.stringify(this.dataObj));
    }

    public getDataObjJson() {
        let value = cc.sys.localStorage.getItem("dataObj");
        if (value === null || value =="") {
            value = this.firstInitDta();
            this.dataObj = value;
        } else {
            this.dataObj = JSON.parse(value);
        }
        //console.log("dataObj",this.dataObj);
        
        //检查残缺值
        for (const key in DataConfig) {
            let i = DataConfig[key];
            if(this.dataObj[key] == null){
                console.log("+++有残缺值");
                this.dataObj[i.Name] = JSON.parse(JSON.stringify(i.defaultValue));
                console.log(this.dataObj);
                this.setDataObjJson();
            }
        }
    }

    public firstInitDta() {
        let obj = {};
        for (const key in DataConfig) {
            obj[key] = DataConfig[key].defaultValue;
        }
        // this.dataObj = JSON.parse(JSON.stringify(obj));
        this.setItem("dataObj", JSON.stringify(obj));
        return obj;
    }

    //以今天的时间设置signDate
    public setSignDate() {
        let obj = Tools.getSystemTime();
        let str = {
            month: obj['month'],
            day: obj['day'],
        };
        this.dataObj["signDate"] = str;
        this.setDataObjJson()
    }

    
    //以今天的时间设置FreeRewardDate
    public setFreeRewardDate() {
        let obj = Tools.getSystemTime();
        let str = {
            month: obj['month'],
            day: obj['day'],
        };
        this.dataObj["freeRewardDate"] = str;
        this.setDataObjJson()
    }

    //记录离线时间戳
    public setOfflineDate() {
        console.log("记录离线时间戳", this.dataObj["offlineDate"]);
        this.dataObj["offlineDate"] = Tools.getSystemTime();
        this.setDataObjJson()
    }

    public setItem(key, value) {
        cc.sys.localStorage.setItem(key, value);
    }

    public getItem(key, defaultValue) {
        let value = cc.sys.localStorage.getItem(key);
        if (value === null) {
            value = defaultValue
            cc.sys.localStorage.setItem(key, defaultValue);
        }
        return value;
    }

    public removeItem(key) {
        cc.sys.localStorage.removeItem(key);
    }
}
