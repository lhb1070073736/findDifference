// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteAtlas)
    spAt:cc.SpriteAtlas;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let root =cc.find("Canvas/loading");
        let child =cc.find("Canvas/loading/LOGO");
        console.log("root",root.position.x,root.position.y);
        console.log("child",child.position.x,child.position.y);
        
        console.log("child2",child.convertToNodeSpaceAR(cc.v2(0,0)).x,child.convertToNodeSpaceAR(cc.v2(0,0)).y);
        console.log("root2",root.convertToNodeSpaceAR(cc.v2(0,0)).x,root.convertToNodeSpaceAR(cc.v2(0,0)).y);
        
    }

    // start () {

    // }

    // update (dt) {}
}
