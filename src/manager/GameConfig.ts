//游戏配置信息
let GameConfig = {
    totalHealth: { Name: "totalHealth", Value: 70 },//总体力
    totalWeapon: { Name: "totalWeapon", Value: 10 },//总武器数
    totalClothes: { Name: "totalClothes", Value: 10 },//总皮肤数

    playPrice: { Name: "playPrice", Value: 10 },//玩一把花费体力
    prop1Price: { Name: "prop1Price", Value: 100 },//道具一价格

    canGetZXJl: { Name: "canGetZXJl", Value: false },//能否领取在线奖励
    ZXJlTime: { Name: "ZXJlTime", Value: 300 },//在线奖励倒计时
    tiliHuiFuTime: { Name: "tiliHuiFuTime", Value: 120 },//体力恢复倒计时


    havaGetOnlineReward: { Name: "havaGetOnlineReward", Value: "时间还没有到呢" },//在线时间奖励
    freeRewardTip: { Name: "freeRewardTip", Value: "明天再来吧" },//免费奖励 右下角明天可领取
    noHealthTip: { Name: "noHealthTip", Value: "体力不足" },//体力不足
    noCoinTip: { Name: "noCoinTip", Value: "金币不足" },//金币不足
    noGemsTip: { Name: "noGemsTip", Value: "钻石不足" },//钻石不足

}
export { GameConfig };