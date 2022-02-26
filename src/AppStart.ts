import DataMar from "./manager/DataMar";
import JsonMar from "./manager/JsonMar";
import ScheduleMar from "./manager/ScheduleMar";
import SoundMar from "./manager/SoundMar";
import TimerMar from "./manager/TimerMar";
import UIMar from "./manager/UIMar";
import qgApi from "./platfrom/qgApi";
import qqApi from "./platfrom/qqApi";
import wxApi from "./platfrom/wxApi";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AppStart extends cc.Component {

onLoad() {
    console.log("欢迎来到开心就找茬");
    this.initMar();


    //平台
    switch (cc.sys.platform) {
        case cc.sys.WECHAT_GAME:
            //wx
            this.initWX()
            break;

        case cc.sys.QQ_PLAY:
            //qq
            this.initQQ();
            break;
        case cc.sys.ANDROID:
            //ANDROID
            break;
        case cc.sys.IPHONE:
            //ios
            break;

        default:
            break;
    }

    cc.game.on(cc.game.EVENT_HIDE, function () {
        console.log("游戏进入后台");
    }, this);

    cc.game.on(cc.game.EVENT_SHOW, function () {
        console.log("重新返回游戏");
    }, this);

    
}

start() {

}

initMar() {
    UIMar.getInstance().init();
    DataMar.getInstance().init();
    ScheduleMar.getInstance().init();
    // JsonMar.getInstance().init();
    // SoundMar.getInstance().init();
    TimerMar.getInstance().init();
}


initWX() {
    wxApi.getInsetance().init()
    wxApi.getInsetance().showShareMenu();
    wxApi.getInsetance().wxLogin();
    wxApi.getInsetance().checkNewVersion();
    // cc.loader.downloader.loadSubpackage("soundRes", (res) => {
    //     console.log(res);
    //     // console.log(res.progress, res.totalBytesWritten, res.totalBytesExpectedToWrite);
    //     SoundMar.getInstance().init();

    // }, () => {
    //     console.log("wechat load subpackage success");
    // });

}

initQQ(){
    qqApi.getInsetance().init();
}

initOppo(){
    qgApi.getInsetance().init()
}

    // update (dt) {}
}
