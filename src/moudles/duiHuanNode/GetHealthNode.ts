import Tools from "../../common/Tools";
import DataMar from "../../manager/DataMar";
import { GameConfig } from "../../manager/GameConfig";
import UIConfig from "../../manager/UIConfig";
import UIMar from "../../manager/UIMar";

//兑换 
const { ccclass, property } = cc._decorator;

@ccclass
export default class GetHealthNode extends cc.Component {
    @property(cc.SpriteFrame)
    sp1: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    sp2: cc.SpriteFrame = null;

    rootNode: cc.Node;
    di2: cc.Node;
    closeBtn: cc.Node;
    freeVideoAdBtn: cc.Node;
    buyBtn: cc.Node;
    downBtn: cc.Node;
    addBtn: cc.Node;

    logo: cc.Node;
    numTxt: cc.Node;

    type: number;//类型 1 生命值 2 金币

    onLoad() {
        this.rootNode = this.node.getChildByName("rootNode");
        this.di2 = this.rootNode.getChildByName("di2");
        this.closeBtn = this.rootNode.getChildByName("closeBtn");
        this.freeVideoAdBtn = this.di2.getChildByName("freeVideoAdBtn");
        this.buyBtn = this.di2.getChildByName("buyBtn");
        this.addBtn = this.di2.getChildByName("addBtn");
        this.downBtn = this.di2.getChildByName("downBtn");
        this.logo = this.di2.getChildByName("logo");
        this.numTxt = this.di2.getChildByName("di3").getChildByName("numTxt");

        Tools.btnAddClick(this.closeBtn, function () {
            UIMar.getInstance().closeCommonUI(UIConfig.getHealthNode.Name);
        }, this)

        Tools.btnAddClick(this.freeVideoAdBtn, function () {
            Tools.textAni(this.rootNode, "看视频广告加体力")
            DataMar.getInstance().dataObj.health++;
            DataMar.getInstance().setDataObjJson();
        }, this)
    }

    start() {

    }

    changLogo(type: number) {
        this.type = type;
        this.logo.getComponent(cc.Sprite).spriteFrame = this['sp' + type.toString()];
        Tools.setNodeLabel(this.numTxt, "0");
    }
    // update (dt) {}
}
