import Tools from "../common/Tools";
import {JsonConfig} from  "./JsonConfig";

//json数据管理类
const { ccclass, property } = cc._decorator;

@ccclass
export default class JsonMar{
    public jsonMap: {};//json数组

    private static _instance: JsonMar;

    public init() {
        let self = this;
        this.jsonMap = {
            
        }
        for (const key in JsonConfig) {
            let jsonRes =  JsonConfig[key].res;
            cc.loader.loadRes(jsonRes, function (err, object) {
                if (err) {
                    console.log(err);
                    return;
                }
                self.jsonMap[key] = JSON.parse(JSON.stringify(object.json));
                // console.log(JsonMar._instance.jsonMap);
            });
        }
        
    }

    public static getInstance() {
        if (!JsonMar._instance) {
            JsonMar._instance = new JsonMar();
        }
        return JsonMar._instance
    }

}
