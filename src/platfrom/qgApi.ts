export default class qgApi extends cc.Component {
    private static _instance: qgApi;
    public static qg:any;//oppo平台

    constructor() { super(); }

    public static getInsetance() {
        if (!qgApi._instance) {
            qgApi._instance = new qgApi();
        }
        return qgApi._instance;
    }

    onEnable(): void {
    }

    onDisable(): void {
    }

    public login(successFunc:Function, failFunc:Function, completeFunc:Function) {
        qgApi.qg.login({
            success:successFunc,
            fail:failFunc,
            complete:completeFunc,
        })
    }

    public init(){
        if (window['qg']) {
            qgApi.qg = window['qg']
        } else {
            console.log('oppo未初始化成功');
            return;
        }
    }

}