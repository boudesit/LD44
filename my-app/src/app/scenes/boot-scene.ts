import {ROOT_CONST} from "../const/root.const"

export class BootScene extends Phaser.Scene {

    constructor() {
        super({
            key : "BootScene"
        });
    }

    preload() : void {
        this.load.image("loading","assets/logo/logo.png");

    }

    create() : void {
        this.scene.start("PreloadScene");

     }

    update() : void {
    }
}