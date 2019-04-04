import {ROOT_CONST} from "../const/root.const"

export class PreloadScene extends Phaser.Scene {

    loadingBar : Phaser.GameObjects.Image;

    constructor() {
        super({
            key : "PreloadScene"
        });
    }


    preload() : void {
        let _this=this;
        this.loadingBar =  this.add.image(512, 288, "loading");

        //TODO: It's just a test remove this after
        for (var i = 0; i < 100; i++) {
            this.load.image("loading"+i, ROOT_CONST.ROOT_ASSETS + "assets/logo/logo.png");
        }

        this.load.on('progress', (value : number) => {
            _this.loadingBar.setCrop(0, 0,525 * value, 900);
        });
    }

    create() : void {

        setTimeout(() => {
            this.scene.start("MainMenuScene");

        }, 2000);
    }

    update() : void { }
}