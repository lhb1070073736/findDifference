import Tools from "../../common/Tools";
import DataMar from "../../manager/DataMar";
import UIConfig from "../../manager/UIConfig";
import UIMar from "../../manager/UIMar";

const { ccclass, property } = cc._decorator;

@ccclass
export default class setNode extends cc.Component {

    setNode: cc.Node;
    closeBtn: cc.Node;
    musicBtn: cc.Node;
    shockBtn: cc.Node;
    state1: cc.Node;
    state2: cc.Node;

    onLoad() {
        let self = this;
        let dataObj = DataMar.getInstance().dataObj;
        this.setNode = this.node.getChildByName("setNode");
        this.closeBtn = this.setNode.getChildByName("closeBtn");
        this.musicBtn = this.setNode.getChildByName("musicBtn");
        this.shockBtn = this.setNode.getChildByName("shockBtn");
        this.state1 = this.musicBtn.getChildByName("state");
        this.state2 = this.shockBtn.getChildByName("state");

        Tools.btnAddClick(this.closeBtn, function () {
            UIMar.getInstance().closeCommonUI(UIConfig.setNode.Name);
        }, this)
        this.musicBtn.on(cc.Node.EventType.TOUCH_START, function () {
            dataObj.isOpenSound = !dataObj.isOpenSound;
            this.updateUI();
            DataMar.getInstance().setDataObjJson();
        }, this)
        this.shockBtn.on(cc.Node.EventType.TOUCH_START, function () {
            dataObj.isOpenVibrete = !dataObj.isOpenVibrete;
            this.updateUI();
            DataMar.getInstance().setDataObjJson();
        }, this)

        this.updateUI();
    }

    start() {

    }

    updateUI(){
        let dataObj = DataMar.getInstance().dataObj;
        let state1 = this.musicBtn.getChildByName("state")
        let state2 = this.shockBtn.getChildByName("state")

        let movePosX = this.musicBtn.getContentSize().width - state1.getContentSize().width
        
        if(dataObj.isOpenSound){
            state1.setPosition(cc.v2(movePosX,0))
        }else{
            state1.setPosition(cc.v2(0,0))
        }

        if(dataObj.isOpenVibrete){
            state2.setPosition(cc.v2(movePosX,0))
        }else{
            state2.setPosition(cc.v2(0,0))
        }
    }
    // update (dt) {}
}
