import Tools from "../common/Tools";
import DataMar from "../manager/DataMar";
import UIConfig from "../manager/UIConfig";
import UIMar from "../manager/UIMar";
import BtnPconfig from "../manager/BtnPConfig";
import BtnSizeconfig from "../manager/BtnSConfig";
//GameNode
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameNode extends cc.Component {

    @property(cc.SpriteFrame)
    sp1: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    sp2: cc.SpriteFrame = null;

    @property
    text: string = 'hello';

    returnBtn: cc.Node;//返回按钮
    tiShiBtn: cc.Node;//提示按钮
    timeLab: cc.Node;//倒计时
    markNode: cc.Node;//问号node
    levelLab: cc.Node;//关卡lab
    upNode: cc.Node;//上图
    downNode: cc.Node;//下图
    df1:cc.Node;
    df2:cc.Node;
    df3:cc.Node;
    df4:cc.Node;
    df5:cc.Node;
    df6:cc.Node;
    quan1:cc.Node;
    quan2:cc.Node;
    quan3:cc.Node;
    quan4:cc.Node;
    quan5:cc.Node;
    quan6:cc.Node;
    star1:cc.Node;
    star2:cc.Node;
    star3:cc.Node;
    star4:cc.Node;
    star5:cc.Node;
    star6:cc.Node;
    pointNum:number =0;
    onLoad() {
        this.initUI();
        this.initFunc();
        //this.initBtn();
    }

    start() {

    }

    initUI() {
        this.returnBtn = this.node.getChildByName("returnBtn")
        this.tiShiBtn = this.node.getChildByName("tiShiBtn")
        this.timeLab = this.node.getChildByName("timeNode").getChildByName("timeLab")
        this.markNode = this.node.getChildByName("markNode")
        this.upNode = this.node.getChildByName("upNode")
        this.downNode = this.node.getChildByName("downNode")
        
        this.df1= this.node.getChildByName("downNode").getChildByName("df1");
        this.quan1= this.node.getChildByName("downNode").getChildByName("df1").getChildByName("quan");
        this.quan1.active=false;
        this.df2= this.node.getChildByName("downNode").getChildByName("df2");
        this.quan2= this.node.getChildByName("downNode").getChildByName("df2").getChildByName("quan");
        this.quan2.active=false;
        this.df3= this.node.getChildByName("downNode").getChildByName("df3");
        this.quan3= this.node.getChildByName("downNode").getChildByName("df3").getChildByName("quan");
        this.quan3.active=false;
        this.df4= this.node.getChildByName("downNode").getChildByName("df4");
        this.quan4= this.node.getChildByName("downNode").getChildByName("df4").getChildByName("quan");
        this.quan4.active=false;
        this.df5= this.node.getChildByName("downNode").getChildByName("df5");
        this.quan5= this.node.getChildByName("downNode").getChildByName("df5").getChildByName("quan");
        this.quan5.active=false;
        this.df6= this.node.getChildByName("downNode").getChildByName("df6");
        this.quan6= this.node.getChildByName("downNode").getChildByName("df6").getChildByName("quan");
        this.quan6.active=false;

        this.star1=this.node.getChildByName("markNode").getChildByName("star1");
        this.star2=this.node.getChildByName("markNode").getChildByName("star2");
        this.star3=this.node.getChildByName("markNode").getChildByName("star3");
        this.star4=this.node.getChildByName("markNode").getChildByName("star4");
        this.star5=this.node.getChildByName("markNode").getChildByName("star5");
        this.star6=this.node.getChildByName("markNode").getChildByName("star6");
    }

    initFunc() {
        Tools.btnAddClick(this.returnBtn, function () {
            UIMar.getInstance().closeCommonUI(UIConfig.gameNode.Name);
        }, this)
        Tools.btnAddClick(this.df1,function(){
            this.pointNum++;
            this.df1.getChildByName("quan").active=true;
            this.changeMarkNode_Highlights();
        },this)
        Tools.btnAddClick(this.df2,function(){
            this.pointNum++;
            this.df2.getChildByName("quan").active=true;
            this.changeMarkNode_Highlights();
        },this)
        Tools.btnAddClick(this.df3,function(){
            this.pointNum++;
            this.df3.getChildByName("quan").active=true;
            this.changeMarkNode_Highlights();
        },this)
        Tools.btnAddClick(this.df4,function(){
            this.pointNum++;
            this.df4.getChildByName("quan").active=true;
            this.changeMarkNode_Highlights();
        },this)
        Tools.btnAddClick(this.df5,function(){
            this.pointNum++;
            this.df5.getChildByName("quan").active=true;
            this.changeMarkNode_Highlights();
        },this)
        Tools.btnAddClick(this.df6,function(){
            this.pointNum++;
            this.df6.getChildByName("quan").active=true;
            this.changeMarkNode_Highlights();
        },this)
    }

    initGame() {
        let self = this;
        let dataObj = DataMar.getInstance().dataObj;
        //换图
        let str = dataObj.level % 10
        
        
        cc.loader.loadRes("guanQia/guan" + str + "/0.png", cc.SpriteFrame, function (err, res) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            Tools.setNodeSpriteFrame(self.upNode, res)
        });
        cc.loader.loadRes("guanQia/guan" + str + "/1.png", cc.SpriteFrame, function (err, res) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            Tools.setNodeSpriteFrame(self.downNode, res)
        });
        // this.df1.active=false;
        // this.df2.active=false;
        // this.df3.active=false;
    }
    // update (dt) {}

    initBtn(){
        this.pointNum=0;
        let self = this;
        // this.star1.active=false;
        // this.star2.active=false;
        // this.star3.active=false;
        this.star4.active=false;
        this.star5.active=false;
        this.star6.active=false;

        this.quan1.active=false;
        this.quan2.active=false;
        this.quan3.active=false;
        this.quan4.active=false;
        this.quan5.active=false;
        this.quan6.active=false;

        let dataObj = DataMar.getInstance().dataObj;
        let str=dataObj.level %10;
        cc.loader.loadRes("guanQia/guan1/" + str + ".png", cc.SpriteFrame, function (err, res) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            Tools.setNodeSpriteFrame(self.downNode, res)
        });

        for(let i=1;i<7;i++){
            let dfpath ="df" + i;
            let levelPath = "level" + str;
            let starPath ="star" + i;
            let starNode = this[starPath];
            this[dfpath].width =  BtnSizeconfig[levelPath][dfpath].width;
            this[dfpath].high=   BtnSizeconfig[levelPath][dfpath].high;
            this[dfpath].position = BtnPconfig[levelPath][dfpath];
            //console.log(dfpath,this[dfpath].width,this[dfpath].high,this[dfpath].position);
            cc.loader.loadRes("atlas/GameNode.plist/Grey point.png",cc.SpriteFrame,function(err,res){
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                Tools.setNodeSpriteFrame(starNode, res)
            })
            //starNode.getComponent(cc.Sprite).SpriteFrame=this.sp1;
        }
        
    }

    changeMarkNode_Highlights(){
        let self=this;
        let starPath = "star" + this.pointNum;
        let temp = this[starPath];
        
        //temp.getComponent(cc.Sprite).spriteFrame=this.sp2;
        cc.loader.loadRes("atlas/GameNode.plist", cc.SpriteAtlas, function (err, res) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            Tools.setNodeSpriteAtlas(temp, res,"Highlights")
        });
    }

}
