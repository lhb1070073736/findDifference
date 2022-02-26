//MyLabel
const { ccclass, property } = cc._decorator;

@ccclass
export default class MyLabel extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    fnt: any;
    string: any;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }
    
    setLabel(fnt, str) {
        this.fnt = fnt;
        this.string = str;
    }
    // update (dt) {}
}
