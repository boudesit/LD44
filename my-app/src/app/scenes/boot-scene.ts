import {ROOT_ASSETS} from "../const/root.const"

export class BootScene extends Phaser.Scene {

    constructor() {
        super({
            key : "BootScene"
        });
    }

    preload() : void {
        this.load.image("loading", ROOT_ASSETS + "assets/logo/logo.png");

    }

    create() : void {
        this.cameras.main.startFollow(this.add.text(0, 0, 'It\'s the first screen of the game').setOrigin(0.5), false);
    }

    update() : void {
       this.scene.start("PreloadScene");
    }
}