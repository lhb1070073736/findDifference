import Tools from "../common/Tools";
import ADMar from "../manager/ADMar";
import DataMar from "../manager/DataMar";
import UIConfig from "../manager/UIConfig";
import UIMar from "../manager/UIMar";
import GetHealthNode from "../moudles/duiHuanNode/GetHealthNode";
import GetPropsNode from "../moudles/duiHuanNode/GetPropsNode";
import GameNode from "./GameNode";

import LuckyNode from "../moudles/luckyNode/LuckyNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainNode extends cc.Component {

    @property(cc.SpriteFrame)
    dengJiSp1: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    dengJiSp2: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    dengJiSp3: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    dengJiSp4: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    dengJiSp5: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    dengJiSp6: cc.SpriteFrame = null;

    camearNode: cc.Node;
    LeftNode: cc.Node;
    RightNode: cc.Node;
    LeftUpNode: cc.Node;

    startBtn: cc.Node;//startBtn

    lifeTxt: cc.Node;//生命值
    coinTxt: cc.Node;//金币

    onLoad() {
        this.adapter();
        this.initUI();
        this.initFunc();
    }

    start() {

    }

    initUI() {
        this.camearNode = this.node.getChildByName("Main Camera");
        // console.log("camerNode",this.camearNode);
        // console.log("this.node",this.node);
        
        this.LeftNode = this.node.getChildByName("LeftNode");
        this.RightNode = this.node.getChildByName("RightNode");
        this.LeftUpNode = this.node.getChildByName("LeftUpNode");
        this.lifeTxt = this.LeftUpNode.getChildByName("di1").getChildByName("lifeTxt")
        this.coinTxt = this.LeftUpNode.getChildByName("di2").getChildByName("coinTxt")

        let dataObj = DataMar.getInstance().dataObj;
        // console.log("dataObj",dataObj.health);
        // console.log("dataObj",dataObj.coin);
        // console.log("dataObj",dataObj);
        Tools.setNodeLabel(this.lifeTxt, dataObj.health)
        Tools.setNodeLabel(this.coinTxt, dataObj.coin)

        //action 动作
        this.startBtn = this.node.getChildByName("Start")
        let act = cc.repeatForever(
            cc.sequence(
                cc.scaleTo(0.2, 1.2),
                cc.scaleTo(0.1, 1),
                cc.scaleTo(0.2, 1.2),
                cc.scaleTo(0.1, 1),
                cc.delayTime(3)
            )
        )
        this.startBtn.runAction(act);

        this.updateUI();
    }

    initFunc() { 
        let setNode = this.LeftNode.getChildByName("setNodeBtn");
        let DengJiBtn = this.LeftNode.getChildByName("DengJiBtn");
        let LuckyBtn = this.LeftNode.getChildByName("LuckyBtn");
        let freeBtn = this.LeftNode.getChildByName("freeBtn");
        let LeaderboardBtn = this.RightNode.getChildByName("LeaderboardBtn");//排行榜
        let addTili = this.LeftUpNode.getChildByName("addTili");
        let addCoin = this.LeftUpNode.getChildByName("addCoin");
        let DailyChallengeBtn = this.RightNode.getChildByName("DailyChallengeBtn")

        setNode.on(cc.Node.EventType.TOUCH_START, function () {
            UIMar.getInstance().openSetUI(this.node);
        }, this)
        Tools.btnAddClick(DengJiBtn, function () {
            UIMar.getInstance().openDengJiUI(this.node);
        }, this)
        Tools.btnAddClick(LuckyBtn, function () {
            UIMar.getInstance().openLuckyUI(this.node);
        }, this)
        Tools.btnAddClick(freeBtn, function () {
            //视频广告加体力
            Tools.textAni(this.node, "看广告得体力")
        }, this)
        Tools.btnAddClick(LeaderboardBtn, function () {
            //排行榜
            Tools.textAni(this.node, "暂未开放")
        }, this)
        Tools.btnAddClick(addTili, function () {
            let func = function () {
                let duiHuanNode = UIMar.getInstance().duiHuanNode;
                console.log("duiHuanNode",duiHuanNode);
            }
            UIMar.getInstance().openCommonUIFunc(UIConfig.getHealthNode.Name, this.node, func)
        }, this)
        Tools.btnAddClick(addCoin, function () {
            let func = function () {
            }
            UIMar.getInstance().openCommonUIFunc(UIConfig.getPropsNode.Name, this.node, func)
        }, this)

        let func = function () {
            let gameNodeSrc = UIMar.getInstance().gameNode.getComponent(GameNode)
            gameNodeSrc.initGame();
        }
        Tools.btnAddClick(this.startBtn, function () {
            console.log("cc.director.getScene()",cc.director.getScene());
            UIMar.getInstance().openCommonUIFunc(UIConfig.gameNode.Name, cc.director.getScene(), func)
        }, this)

        Tools.btnAddClick(DailyChallengeBtn, function () {
            UIMar.getInstance().openCommonUIFunc(UIConfig.gameNode.Name, cc.director.getScene(), func)
        }, this)
    }

    //bg 图适配
    adapter() {
        //获取手机分辨率适配
        let b = cc.director.getWinSizeInPixels()
        let bx = b.width
        let by = b.height
        let xBY = bx / by;
        let bi = 750 / 1333;
        this.node.width = bx;
        this.node.height = by;
        let bgNode = this.node.getChildByName("BJ");
        if (xBY > bi) {
            bgNode.scale = bx / 750;
        } else {
            bgNode.scale = by / 1333;

        }
        // console.log(bgNode.width);
        // console.log(bgNode.height);

    }

    updateUI() {
        let sp = this.LeftNode.getChildByName("DengJiBtn").getChildByName("Rmxs");
        let dengJiNum = DataMar.getInstance().dataObj.dDengJi;
        Tools.setNodeSpriteFrame(sp, this["dengJiSp" + dengJiNum])
    }
    // update (dt) {}
}
