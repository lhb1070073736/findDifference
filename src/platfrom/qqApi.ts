export default class qqApi extends cc.Component {
    private static _instance: qqApi;
    public static qq:any;//QQ平台

    constructor() { super(); }

    public static getInsetance() {
        if (!qqApi._instance) {
            qqApi._instance = new qqApi();
        }
        return qqApi._instance;
    }

    onEnable(): void {
    }

    onDisable(): void {
    }

    public login() {

    }

    public init(){
        if (window['qq']) {
            qqApi.qq = window['qq']
        } else {
            console.log('qq未初始化成功');
            return;
        }
    }

    public updataLatestVersion() {


        if (typeof qqApi.qq.getUpdateManager === 'function') { // 请在使用前先判断是否支持
            const updateManager = qqApi.qq.getUpdateManager()

            updateManager.onCheckForUpdate(function (res) {
                // 请求完新版本信息的回调
                console.log(res.hasUpdate)
            })

            updateManager.onUpdateReady(function () {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
            })

            updateManager.onUpdateFailed(function () {
                // 新的版本下载失败
            })
        }
    }

    public showShareMenu(successFunc: Function, failFunc: Function, completeFunc: Function) {
        qqApi.qq.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
            success: successFunc,
            fail: failFunc,
            complete: completeFunc,
        })
    }

    // qq.shareAppMessage(Object object)
    // 主动拉起转发。可以选择不同的转发目标类型
    public shareAppMessage(inputTitle:string, inputImageUrl:string, inputQuery:string, inputShareAppType:string, successFunc:Function, failFunc:Function, completeFunc:Function, ) {
        let obj = {
            title:inputTitle,
            imageUrl:inputImageUrl,
            query:inputQuery,
            shareAppType:inputShareAppType,
            success:successFunc,
            fail:failFunc,
            complete:completeFunc,
        };
        qqApi.qq.shareAppMessage(obj);
    }
}