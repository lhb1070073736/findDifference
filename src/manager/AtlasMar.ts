import { AtlasConfig } from "./AtlasConfig";

//图集管理类
const {ccclass, property} = cc._decorator;

@ccclass
export default class AtlasMar  {


    private static _instance : AtlasMar;//
    roleAtlas:cc.SpriteAtlas;//role图集
    weaponAtlas:cc.SpriteAtlas;//role图集
    weaponHeadAtlas:cc.SpriteAtlas;//role图集
    gameNodeAtlas:cc.SpriteAtlas;//role图集
    biaoQingAtlas:cc.SpriteAtlas;//role图集
  


    public static getInstance(){
        if(! AtlasMar._instance ){
            AtlasMar._instance = new AtlasMar();
        }
        return AtlasMar._instance
    }
    init(){
        let self = this;
        
        cc.loader.loadRes("atlas/role", cc.SpriteAtlas, function (err, atlas) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            self.roleAtlas = atlas;
        });
                
        cc.loader.loadRes("atlas/biaoQing", cc.SpriteAtlas, function (err, atlas) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            self.biaoQingAtlas = atlas;
        });
        
        cc.loader.loadRes("atlas/weapon", cc.SpriteAtlas, function (err, atlas) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            self.weaponAtlas = atlas;
        });
                
        cc.loader.loadRes("atlas/weaponHead", cc.SpriteAtlas, function (err, atlas) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            self.weaponHeadAtlas = atlas;
        });
        cc.loader.loadRes("atlas/gameNode", cc.SpriteAtlas, function (err, atlas) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            self.gameNodeAtlas = atlas;
        });
    }

    getSpriteFrame(type ,spName){
        let  data;
        switch(type)
        { 
            case AtlasConfig.role:
                data = this.roleAtlas.getSpriteFrame(spName);
                break;
            case AtlasConfig.weapon:
                data = this.weaponAtlas.getSpriteFrame(spName);
                break;

            case AtlasConfig.weaponHead:
                data = this.weaponHeadAtlas.getSpriteFrame(spName);
                break;
            case AtlasConfig.gameNodeUi:
                data = this.gameNodeAtlas.getSpriteFrame(spName);
                break;
        }
        return data;
    }

    getSpriteAtla(type){
        var data = null;
        switch(type)
        { 
            case AtlasConfig.role:
                data = this.roleAtlas;
                break;
            case AtlasConfig.weapon:
                data = this.weaponAtlas;
                break;
            case AtlasConfig.weaponHead:
                data = this.weaponHeadAtlas;
                break;
            case AtlasConfig.gameNodeUi:
                data = this.gameNodeAtlas;
                break;
        }
        return data;
    }
    // update (dt) {}
}
