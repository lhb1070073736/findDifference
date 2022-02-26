import Tools from "../../common/Tools";
import DataMar from "../../manager/DataMar";
import UIConfig from "../../manager/UIConfig";
import UIMar from "../../manager/UIMar";

//抽奖 幸运之路
const {ccclass, property} = cc._decorator;

@ccclass
export default class LuckyNode extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    centerNode:cc.Node;
    leftUpNode:cc.Node;

    closeBtn:cc.Node;
    beginBtn:cc.Node;
    lifeTxt: cc.Node;//生命值
    coinTxt: cc.Node;//金币

    onLoad () {
        this.centerNode = this.node.getChildByName("centerNode");
        this.leftUpNode = this.node.getChildByName("leftUpNode");

        this.closeBtn = this.centerNode.getChildByName("closeBtn");
        this.beginBtn = this.centerNode.getChildByName("beginBtn");
        this.lifeTxt = this.leftUpNode.getChildByName("di1").getChildByName("lifeTxt")
        this.coinTxt = this.leftUpNode.getChildByName("di2").getChildByName("coinTxt")
        
        this.updateUI();
        this.initFunc();
    }

    start () {

    }

    initFunc(){
        Tools.btnAddClick(this.closeBtn, function(){
            UIMar.getInstance().closeCommonUI(UIConfig.luckyNode.Name);
        },this)
        Tools.btnAddClick(this.beginBtn, function(){
            console.log("抽奖开始");
        },this)
    }

    updateUI(){
        let dataObj = DataMar.getInstance().dataObj;
        Tools.setNodeLabel(this.lifeTxt, dataObj.health)
        Tools.setNodeLabel(this.coinTxt, dataObj.coin)
        
    }
    // update (dt) {}
}
