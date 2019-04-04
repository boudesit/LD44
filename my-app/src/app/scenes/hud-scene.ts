export class HudScene extends Phaser.Scene {

    constructor() {

        super({
            key : "HudScene"
        })
    }

    create() : void {

        this.cameras.main.startFollow(this.add.text(0, 0, 'It\'s the first screen of the game').setOrigin(0.5), false);

    }

    update() : void {
        
    }
}