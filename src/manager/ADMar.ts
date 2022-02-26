//广告管理类
const {ccclass, property} = cc._decorator;

@ccclass
export default class AdMar  {


    private static _instance : AdMar;//
  
    initData(){
        
    }

    getInstance(){
        if(! AdMar._instance ){
            AdMar._instance = new AdMar();
        }
        return AdMar._instance
    }
    
    // update (dt) {}
}
