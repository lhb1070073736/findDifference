const { ccclass, property } = cc._decorator;

@ccclass
export default class CovertPoint extends cc.Component {

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


    /**
     *  * 把一个节点的本地坐标转到另一个节点的本地坐标下
     * @param {*} node 
     * @param {*} targetNode 
     */
    public static convetOtherNodeSpace(node, targetNode) {
        if (!node || !targetNode) {
            return null;
        }
        //先转成世界坐标
        let worldPoint = this.localConvertWorldPoint(node);
        return this.worldConvertLocalPoint(targetNode, worldPoint);
    }
    // update (dt) {}
}
