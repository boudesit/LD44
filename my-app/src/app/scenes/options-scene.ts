export class OptionScene extends Phaser.Scene {

    constructor() {

        super({
            key : "OptionScene"
        })
    }

    create() : void {

        this.cameras.main.startFollow(this.add.text(0, 0, 'It\'s the options screen of the game').setOrigin(0.5), false);

    }

    update() : void {
        
    }
}