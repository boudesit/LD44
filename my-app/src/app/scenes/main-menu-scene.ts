export class MainMenuScene extends Phaser.Scene {

    constructor(){
        super({
            key : "MainMenuScene"
        })
    }

    create() {
        this.cameras.main.startFollow(this.add.text(0, 0, 'It\'s the first screen of the game').setOrigin(0.5), false);
    }

    update() {

    }
}