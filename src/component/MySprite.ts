//MySprite
const { ccclass, property } = cc._decorator;

@ccclass
export default class MySprite extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }
    
    setSprite(atlasType, frame) {
    }
    // update (dt) {}
}
