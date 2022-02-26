let DataConfig = {
    coin: { Name: "coin", defaultValue: 0 },
    health: { Name: "health", defaultValue: 5 },
    diamond: { Name: "diamond", defaultValue: 0 },

    signDay: { Name: "signDay", defaultValue: 0 },//签到时间
    signDate: { Name: "signDate", defaultValue: { month: 0, day: 0 } },//上次签到时间
    freeRewardDate: { Name: "freeRewardDate", defaultValue: { month: 0, day: 0 } },//免费奖励时间  右下角明日可领取
    offlineDate: { Name: "offlineDate", defaultValue: { month: 0, day: 0 } },//离线时间  更新体力用

    offlineDateStamp: { Name: "offlineDate", defaultValue: 0 },//离线时间戳
    isOpenVibrete: { Name: "isOpenVibrete", defaultValue: true },//是否开启振动
    isOpenSound: { Name: "isOpenSound", defaultValue: true },//是否开启音效

    level: { Name: "level", defaultValue: 1 },//当前关卡
    dDengJi: { Name: "dDengJi", defaultValue: 1 },//当前大等级
    xDengJi: { Name: "xDengJi", defaultValue: 1 },//当前小等级

}
export { DataConfig };