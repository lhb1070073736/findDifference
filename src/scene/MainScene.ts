import { ScheduleConfig } from "../manager/ScheduleConfig";
import ScheduleMar from "../manager/ScheduleMar";
import UIMar from "../manager/UIMar";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainScene extends cc.Component {


    onLoad() {
        let self = this;
        let bar1 = this.node.getChildByName("loading").getChildByName("bar2").getChildByName("bar1");
        let loadingBarFunc = function () {
            if (bar1.getComponent(cc.Sprite).fillRange < 1) {
                bar1.getComponent(cc.Sprite).fillRange += 0.3;
            } else {
                UIMar.getInstance().openMainNodeUI(self.node);
                ScheduleMar.getInstance().closeSetInterval(ScheduleConfig.loadingProgressBar);
            }
        }
        ScheduleMar.getInstance().setInterval(ScheduleConfig.loadingProgressBar, loadingBarFunc, 0.5)
    }

    start() {

    }

}
