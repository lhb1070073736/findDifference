import Tools from "../../common/Tools";
import DataMar from "../../manager/DataMar";
import UIConfig from "../../manager/UIConfig";
import UIMar from "../../manager/UIMar";

//等级 荣耀之路
const { ccclass, property } = cc._decorator;

@ccclass
export default class DengJiNode extends cc.Component {

    @property(cc.SpriteFrame)
    sp1: cc.SpriteFrame = null;//未选中底图
    @property(cc.SpriteFrame)
    sp2: cc.SpriteFrame = null;//选中底图

    dengJiNode: cc.Node;
    closeBtn: cc.Node;
    ChooseNode: cc.Node;//标记

    onLoad() {
        let firstPosY = -220;
        let cahZhi = 85;
        let dataObj = DataMar.getInstance().dataObj;
        this.dengJiNode = this.node.getChildByName("dengJiNode");
        this.closeBtn = this.dengJiNode.getChildByName("closeBtn");
        this.ChooseNode = this.dengJiNode.getChildByName("Choose");
        this.ChooseNode.position.y = firstPosY + (dataObj.dDengJi - 1) * cahZhi;
        Tools.btnAddClick(this.closeBtn, function () {
            UIMar.getInstance().closeCommonUI(UIConfig.dengJiNode.Name);
        }, this)

    }

    start() {

    }

    // update (dt) {}
}
