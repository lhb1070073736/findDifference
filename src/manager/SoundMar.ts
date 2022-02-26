import wxApi from "../platfrom/wxApi";
import DataMar from "./DataMar";
import { SoundConfig } from "./SoundConfig";

//声音播放类
const { ccclass, property } = cc._decorator;

@ccclass
export default class SoundMar {


    private static _instance: SoundMar;//
    public is_music_mute: number;
    public canVibrete: boolean = true;
    public soundMap: {};

    init() {
        let self = this;
        this.initData();
        this.soundMap = {}
        for (const key in SoundConfig) {
            let jsonRes = SoundConfig[key].res;
            cc.loader.loadRes(jsonRes, function (err, AudioClip) {
                if (err) {
                    console.log(err);
                    return;
                }
                self.soundMap[key] = AudioClip;
                console.log(AudioClip);
            });
        }

    }

    initData() {
        let dataObj = DataMar.getInstance().dataObj;
        if (dataObj.isOpenSound) {
            this.is_music_mute = 1;
        } else {
            this.is_music_mute = 0;
        }

        if (dataObj.isOpenVibrete) {
            this.canVibrete = true;
        } else {
            this.canVibrete = false;
        }
    }

    public static getInstance() {
        if (!SoundMar._instance) {
            SoundMar._instance = new SoundMar();
        }
        return SoundMar._instance
    }

    //设置音乐开关 
    public setStatus() {
        if (this.is_music_mute === 1) {
            cc.audioEngine.setEffectsVolume(1);
            cc.audioEngine.setMusicVolume(1);
        } else {
            cc.audioEngine.stopMusic();
            cc.audioEngine.setEffectsVolume(0);
            cc.audioEngine.setMusicVolume(0);
        }
    }
    //播放游戏背景音乐
    public playBgMusic(type: number, is_loop) {
        if (this.is_music_mute === 0) {
            return;
        }
        cc.audioEngine.stopMusic();
        if (type === 1) {
            cc.audioEngine.playMusic(this.soundMap[SoundConfig.bg.Name], is_loop);

        } else if (type === 2) {
            cc.audioEngine.playMusic(this.soundMap[SoundConfig.bg2.Name], is_loop);

        }
    }

    //播放游戏背景音乐
    public stopBgMusic() {
        if (this.is_music_mute === 0) {
            cc.audioEngine.stopMusic();
        }
      
    }

    //播放音效：
    public play_Eff(str: string, is_loop = false) {
        if (this.is_music_mute === 0) {
            return;
        }
        cc.audioEngine.stopAllEffects();
        if (this.soundMap[str]) {

            cc.audioEngine.playEffect(this.soundMap[str], is_loop);
        }

    }

    //播放按钮音效：
    public play_clickEff(is_loop = false) {
        if (this.is_music_mute === 0) {
            return;
        }

        cc.audioEngine.stopAllEffects();
        if (this.soundMap[SoundConfig.btn.Name]) {
            // console.log("播放音乐", SoundConfig.btn.Name);
            // console.log("播放音乐", this.soundMap[SoundConfig.btn.Name]);

            cc.audioEngine.playEffect(this.soundMap[SoundConfig.btn.Name], is_loop);
        }
    }

    //播放奖励音效：
    public play_rewardEff() {
        if (this.is_music_mute === 0) {
            return;
        }
        cc.audioEngine.stopAllEffects();
        if (this.soundMap[SoundConfig.getRewards.Name]) {
            cc.audioEngine.playEffect(this.soundMap[SoundConfig.getRewards.Name], false);
        }
    }

    //播放胜利音效：
    public play_winEff() {
        if (this.is_music_mute === 0) {
            return;
        }
        cc.audioEngine.stopAllEffects();
        if (this.soundMap[SoundConfig.win.Name]) {
            cc.audioEngine.playEffect(this.soundMap[SoundConfig.win.Name], false);
        }
    }

    //长振动
    public vibrateLong() {
        if (!this.canVibrete) {
            return;
        }
        //平台
        switch (cc.sys.platform) {
            case cc.sys.WECHAT_GAME:
                //wx
                wxApi.vibrateLong()
                break;

            case cc.sys.QQ_PLAY:
                //wx
                break;
            case cc.sys.ANDROID:
                //wx
                break;
            case cc.sys.IPHONE:
                //ios
                break;

            default:
                break;
        }

    }


    //短振动
    public vibrateShort() {
        if (!this.canVibrete) {
            return;
        }
        //平台
        switch (cc.sys.platform) {
            case cc.sys.WECHAT_GAME:
                //wx
                wxApi.vibrateShort()
                break;

            case cc.sys.QQ_PLAY:
                //wx
                break;
            case cc.sys.ANDROID:
                //wx
                break;
            case cc.sys.IPHONE:
                //ios
                break;

            default:
                break;
        }

    }
    // update (dt) {}
}
