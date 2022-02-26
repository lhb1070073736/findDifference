import UIConfig from "./UIConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIMar {
    private static _instance: UIMar;

    UIRoot: cc.Node;//默认顶级节点
    testUI: cc.Node;
    setNode: cc.Node;//设置界面
    paiHangBangNode: cc.Node;//排行榜界面
    dengJiNode: cc.Node;//登记界面
    duiHuanNode: cc.Node;//兑换界面
    luckyNode: cc.Node;//幸运抽奖

    mainNode: cc.Node;//游戏大厅
    gameNode: cc.Node;//游戏

    init() {

    }

    public static getInstance() {
        if (!UIMar._instance) {
            UIMar._instance = new UIMar();
        }
        return UIMar._instance;
    }


    openCommonUI(nodeName: string, rootNode: cc.Node = null) {
        var self = this;
        // console.log("nodeName",nodeName);
        // console.log("this[nodeName]",this[nodeName]);
        // console.log("this[nodeName]",typeof(this[nodeName]));
        if (this[nodeName]) {
            this[nodeName].active = true;
            this[nodeName].opacity = 0;

            var fadeIn = cc.fadeIn(0.25);
            this[nodeName].runAction(fadeIn);
            this[nodeName].zIndex = UIConfig[nodeName].Layer;
        } else {
            this[nodeName] = null;
            cc.loader.loadRes("prefabs/uiPrefab/" + UIConfig[nodeName].Name, cc.Prefab, function (errmsg, prefab) {
                if (errmsg) {
                    cc.error(errmsg.message || errmsg);
                    return;
                }
                self[nodeName] = cc.instantiate(prefab);
                // console.log("roootNode",rootNode);
                // console.log("UIRoot",self.UIRoot);
                
                if (rootNode === null) {
                    rootNode = self.UIRoot;
                }
                self[nodeName].parent = rootNode;
                self[nodeName].active = true;
                self[nodeName].position = cc.v2(0, 0);
                self[nodeName].opacity = 0;
                var fadeIn = cc.fadeIn(0.25);
                self[nodeName].runAction(fadeIn);
                self[nodeName].zIndex = UIConfig[nodeName].Layer;
            });
        }
    }


    openCommonUIFunc(nodeName: string, rootNode: cc.Node = null, func: Function) {
        var self = this;
        if (this[nodeName]) {
            this[nodeName].active = true;
            this[nodeName].opacity = 0;

            let seq = cc.sequence(
                cc.fadeIn(0.2),
                cc.callFunc(func)
            )
            this[nodeName].runAction(seq);
            this[nodeName].zIndex = UIConfig[nodeName].Layer;
        } else {
            this[nodeName] = null;
            cc.loader.loadRes("prefabs/uiPrefab/" + UIConfig[nodeName].Name, cc.Prefab, function (errmsg, prefab) {
                if (errmsg) {
                    cc.error(errmsg.message || errmsg);
                    return;
                }
                self[nodeName] = cc.instantiate(prefab);
                if (rootNode === null) {
                    rootNode = self.UIRoot;
                }
                self[nodeName].parent = rootNode;
                self[nodeName].active = true;
                self[nodeName].position = cc.v2(0, 0);
                self[nodeName].opacity = 0;
                let seq = cc.sequence(
                    cc.fadeIn(0.2),
                    cc.callFunc(func)
                )
                self[nodeName].runAction(seq);
                self[nodeName].zIndex = UIConfig[nodeName].Layer;
            });
        }
    }

    openPre(nodeName: string, rootNode: cc.Node = null) {
        var self = this;
        if (this[nodeName]) {
            this[nodeName].active = true;
            this[nodeName].opacity = 0;

            var fadeIn = cc.fadeIn(0.25);
            this[nodeName].runAction(fadeIn);
            this[nodeName].zIndex = UIConfig[nodeName].Layer;
        } else {
            this[nodeName] = null;
            cc.loader.loadRes(UIConfig[nodeName].Res, cc.Prefab, function (errmsg, prefab) {
                if (errmsg) {
                    cc.error(errmsg.message || errmsg);
                    return;
                }
                self[nodeName] = cc.instantiate(prefab);
                if (rootNode === null) {
                    rootNode = self.UIRoot;
                }
                self[nodeName].parent = rootNode;
                self[nodeName].active = true;
                // self[nodeName].position = cc.v2(0, 0);
                self[nodeName].opacity = 0;
                var fadeIn = cc.fadeIn(0.25);
                self[nodeName].runAction(fadeIn);
                self[nodeName].zIndex = UIConfig[nodeName].Layer;
            });
        }
    }

    openPreFunc(nodeName: string, rootNode: cc.Node = null, func: Function) {
        var self = this;
        if (this[nodeName]) {
            this[nodeName].active = true;
            this[nodeName].opacity = 0;

            let seq = cc.sequence(
                cc.fadeIn(0.2),
                cc.callFunc(func)
            )
            this[nodeName].runAction(seq);
            this[nodeName].zIndex = UIConfig[nodeName].Layer;
        } else {
            this[nodeName] = null;
            cc.loader.loadRes(UIConfig[nodeName].Res, cc.Prefab, function (errmsg, prefab) {
                if (errmsg) {
                    cc.error(errmsg.message || errmsg);
                    return;
                }
                self[nodeName] = cc.instantiate(prefab);
                if (rootNode === null) {
                    rootNode = self.UIRoot;
                }
                self[nodeName].parent = rootNode;
                self[nodeName].active = true;
                self[nodeName].position = cc.v2(0, 0);
                self[nodeName].opacity = 0;
                let seq = cc.sequence(
                    cc.fadeIn(0.2),
                    cc.callFunc(func)
                )
                self[nodeName].runAction(seq);
                self[nodeName].zIndex = UIConfig[nodeName].Layer;
            });
        }
    }

    closeCommonUI(nodeName: string) {
        let self = this;
        if (self[nodeName]) {
            let seq = cc.sequence(
                cc.fadeOut(0.2),
                cc.callFunc(function () {
                    self[nodeName].active = false;
                })
            )
            self[nodeName].runAction(seq);
        }
    }

    removeCommonUI(nodeName: string) {
        let self = this;
        if (self[nodeName]) {
            let seq = cc.sequence(
                cc.fadeOut(0.2),
                cc.callFunc(function () {
                    self[nodeName].removeFromParent();
                    self[nodeName] = null;
                })
            )
            self[nodeName].runAction(seq);
        }
    }

    openSetUI(rootNode: cc.Node = null) {
        this.openCommonUI(UIConfig.setNode.Name, rootNode);
    }

    openDengJiUI(rootNode: cc.Node = null) {
        this.openCommonUI(UIConfig.dengJiNode.Name, rootNode);
    }


    openPaiHangBangUI(rootNode: cc.Node = null) {
        this.openCommonUI(UIConfig.paiHangBangNode.Name, rootNode);
    }

    openDuiHuanUI(rootNode: cc.Node = null) {
        this.openCommonUI(UIConfig.paiHangBangNode.Name, rootNode);
    }

    openLuckyUI(rootNode: cc.Node = null) {
        this.openCommonUI(UIConfig.luckyNode.Name, rootNode);
    }

    openMainNodeUI(rootNode: cc.Node = null) {
        this.openCommonUI(UIConfig.mainNode.Name, rootNode);
    }
    // update (dt) {}
}
