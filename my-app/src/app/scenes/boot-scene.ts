import {ROOT_CONST} from "../const/root.const"

export class BootScene extends Phaser.Scene {

    constructor() {
        super({
            key : "BootScene"
        });
    }

    preload() : void {
        this.load.image("loading", ROOT_CONST.ROOT_ASSETS + "assets/logo/logo.png");

    }

    create() : void { }

    update() : void {
       this.scene.start("PreloadScene");
    }
}