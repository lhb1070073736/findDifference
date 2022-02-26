import SoundMar from "../manager/SoundMar";

export default class wxApi extends cc.Component {
    private static _instance: wxApi;
    public static wx: any;//QQ平台
    isCheckNewVersion: boolean = false;

    constructor() { super(); }

    public static getInsetance() {
        if (!wxApi._instance) {
            wxApi._instance = new wxApi();
        }
        return wxApi._instance;
    }

    onEnable(): void {
    }

    onDisable(): void {
    }

    public login() {

    }

    public init() {
        if (window['wx']) {
            wxApi.wx = window['wx']
        } else {
            console.log('wx未初始化成功');
            return;
        }
    }

    public updataLatestVersion() {

    }


    /**长振动 */
    public static vibrateLong() {
        if (!SoundMar.getInstance().canVibrete) return;
        let a = function () { }
        wxApi.wx.vibrateLong({ success: a, fail: a, complete: a });
    }

    /**短振动 */
    public static vibrateShort() {
        if (!SoundMar.getInstance().canVibrete) return;
        let a = function () { }
        wxApi.wx.vibrateShort({ success: a, fail: a, complete: a });
    }

    //微信登录
    public wxLogin() {
        let self = this;
        wxApi.wx.login({
            success: function (res) {
                console.log("登录res" + res);
                if (res.code) {
                    console.log("登录成功" + res.code);
                    // self.js_code = res.code;
                    // self.loginSuccess = true;
                    // // self.OK = true;
                    // // SceneManger.Instance.openScene(ScenesConfig.main,true);
                    // self.enterLobby();
                    try {

                    } catch (error) {
                        console.log('login>>:' + error);
                    }
                } else {
                    console.log("登录失败1");
                }
            }, fail: function () {
                console.log("登录失败2");
            }
        })
    }


    public showShareMenu() {
        wxApi.wx.showShareMenu({
            withShareTicket: true
        });
        wxApi.wx.onShareAppMessage(function (res) {
            var shareQueryObj: any = {};
            shareQueryObj.type = 1;
            shareQueryObj.userId = "test";
            // var shareQueryMsg = FrameworkHelper.getParamsMsgForObj(shareQueryObj);
            var imgUrl = 'ui/bossImg.png';
            // var imgUrlId = '8SE3nvNKSgOkxfzQDMY0Qg==';
            return {
                title: '来，挑战这个超级有趣的找茬游戏',
                imageUrl: imgUrl,
                query: shareQueryObj,
                // imageUrlId: imgUrlId,
                success(res) {
                    console.log("转发成功");
                },
                fail(res) {
                    console.log("转发失败");
                },
                toCurrentGroup: true
            }
        });
    }

    /**管理小程序更新 */
    checkNewVersion() {
        if (this.isCheckNewVersion) return;
        let updateManager = wxApi.wx.getUpdateManager()
        updateManager.onCheckForUpdate((res) => {
            // 请求完新版本信息的回调
            if (res.hasUpdate) {
                this.isCheckNewVersion = true;
                wxApi.wx.showLoading({ title: '应用更新中' });
                updateManager.onUpdateReady((res) => {
                    wxApi.wx.hideLoading();
                    updateManager.applyUpdate();
                });
            }
        });
        updateManager.onUpdateFailed(() => {
            wxApi.wx.showToast({ title: '新版本下载失败' });
            wxApi.wx.hideLoading();
        })
    }
}