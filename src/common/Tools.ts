import { SoundConfig } from "../manager/SoundConfig";
import SoundMar from "../manager/SoundMar";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Tools extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // onLoad () {}

    start() {

    }


    /**
     * 把一个世界坐标的点，转换到某个节点下的坐标
     * 原点在node中心
     * @param {*} node 
     * @param {*} worldPoint 
     */
    public static worldConvertLocalPointAR(node, worldPoint) {
        if (node) {
            return node.convertToNodeSpaceAR(worldPoint);
        }
        return null;
    }

    /**
     * 把一个世界坐标的点，转换到某个节点下的坐标
     * 原点在node左下角
     * @param {*} node 
     * @param {*} worldPoint 
     */
    public static worldConvertLocalPoint(node, worldPoint) {
        if (node) {
            return node.convertToNodeSpace(worldPoint);
        }
        return null;

    }

    /**
 * 得到一个节点的世界坐标
 * node的原点在中心
 * @param {*} node 
 */
    public static localConvertWorldPointAR(node) {
        if (node) {
            return node.convertToWorldSpaceAR(cc.v2(0, 0));
        }
        return null;
    }

    /**
     * 得到一个节点的世界坐标
     * node的原点在左下边
     * @param {*} node 
     */
    public static localConvertWorldPoint(node) {
        if (node) {
            return node.convertToWorldSpace(cc.v2(0, 0));
        }
        return null;
    }

    /**两个角度之间的最小夹角差，带正负号*/
    public static getAnglePoor(angle1: number, angle2: number) {
        let angle_1: number = angle1 % 360;
        let angle_2: number = angle2 % 360;
        if (angle_1 > 180) {
            angle_1 = angle_1 - 360;
        } else if (angle_1 < -180) {
            angle_1 = angle_1 + 360;
        }
        let dis_angle: number = angle_2 - angle_1;
        if (dis_angle > 180) {
            dis_angle = dis_angle - 360;
        } else if (dis_angle < -180) {
            dis_angle = 360 + dis_angle;
        }
        return dis_angle;
    }

    //点击事件
    public static btnAddClick(node: cc.Node, func: Function, caller: any, soundType?: number) {
        if (soundType == null) {
            soundType = 1;
        }
        if (soundType === 1) {
            node.on(cc.Node.EventType.TOUCH_START, function () {
                // SoundMar.getInstance().play_clickEff()
            }, caller)
        }
        node.on(cc.Node.EventType.TOUCH_START, func, caller)
    }

    //获取年月日
    public static getSystemTime() {
        let curDate: Date = new Date();
        let year: number = curDate.getFullYear();
        let month: number = curDate.getMonth() + 1;
        let date: number = curDate.getDate();
        let proje = {};
        proje['year'] = year;
        proje['month'] = month;
        proje['day'] = date;
        return proje;
    }

    //通过js的内置对象JSON来进行数组对象的深拷贝  JSON对象实现深拷贝的一些问题 * 无法实现对对象中方法的深拷贝
    public static deepClone2(obj) {
        let objClone = JSON.parse(JSON.stringify(obj));
        return objClone;
    }

    public static textAni(rootNode: cc.Node, str: string) {
        let text = new cc.Node();
        text.color = cc.color(0, 0, 0);
        let lab = text.addComponent(cc.Label);
        lab.string = str;

        let seq = cc.sequence(
            cc.fadeIn(0.1),
            cc.moveBy(0.8, cc.v2(0, 80)),
            cc.removeSelf(true)
        )
        rootNode.addChild(text);
        text.runAction(seq)
    }

    public static textAni2(rootNode: cc.Node, str: string) {
        let text = new cc.Node();
        text.color = cc.color(0, 0, 0);
        let lab = text.addComponent(cc.Label);
        lab.string = str;

        let seq = cc.sequence(
            cc.fadeIn(0.3),
            cc.removeSelf(true)
        )
        rootNode.addChild(text);
        text.runAction(seq)
    }


    public static textAlert(str: string) {
        let text = new cc.Node();
        let lab = text.addComponent(cc.Label);
        lab.string = str;
        let seq = cc.sequence(
            cc.fadeIn(0.3),
            cc.removeSelf(true)
        )
        cc.director.getScene().addChild(text);
        text.runAction(seq)
    }

    //获取节点  设置label组件的文字内容
    public static setNodeLabel(rootNode: cc.Node, str: string | number) {
        let lab = rootNode.getComponent(cc.Label)
        if (lab) {
            if (typeof (str) === "number") {
                lab.string = str.toString();
            } else {
                lab.string = str;
            }
        }
    }

    //获取节点  get label组件的文字内容
    public static getNodeLabel(rootNode: cc.Node) {
        let lab = rootNode.getComponent(cc.Label)
        if (lab) {
            return lab.string;
        } else {
            return "寂寞";
        }
    }

    //获取节点  设置sprite组件的图片
    public static setNodeSpriteFrame(rootNode: cc.Node, sp: cc.SpriteFrame) {
        let spNode = rootNode.getComponent(cc.Sprite)
        if (spNode) {
            spNode.spriteFrame = sp;
        } else {
            console.log("设置spriteFrame失败");
        }
    }

    //获取节点  设置sprite组件的图集
    public static setNodeSpriteAtlas(rootNode: cc.Node, sp: cc.SpriteAtlas,str:string) {
        let spNode = rootNode.getComponent(cc.Sprite)
        if (spNode) {
            spNode.spriteFrame = sp.getSpriteFrame(str);
        } else {
            console.log("设置spriteAtlas失败");
        }
    }

    //判断两天是否是同一天
    public static checkSameDay(day1: object, day2: object) {
        if (day1['month'] == day2['month'] && day1['day'] == day2['day']) {
            return true
        } else {
            false
        }

    }

    //获取手机分辨率
    public static getPhoneSixe() {
        var b = cc.director.getWinSizeInPixels()
        var bx = b.width
        var by = b.height
        return b;
    }

    //秒数转 00:00倒计时
    public static miaoToDJS(num: number) {
        let min = Math.floor(num / 60);
        let miao = num % 60;
        let minStr = "";
        let miaoStr = "";
        if (min < 10) {
            minStr = "0" + min;
        } else {
            minStr = min.toString();

        }
        if (miao < 10) {
            miaoStr = "0" + miao;
        } else {
            miaoStr = miao.toString()
        }
        return (minStr + ":" + miaoStr);
    }

}
