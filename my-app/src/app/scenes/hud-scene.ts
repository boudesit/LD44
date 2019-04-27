import { Player } from '../objects/player';

export class HudScene extends Phaser.Scene {

    player : Player;

    constructor() {

        super({
            key : "HudScene"
        })
    }

    create() : void {

        this.player = new Player(this.cache.json.get("player"))

        this.cameras.main.startFollow(this.add.text(0, 0, 'It\'s the first screen of the game').setOrigin(0.5), false);

    }

    update() : void {
        
    }

    cardClicked() {

    }

    endTurn() {

    }

    rerollTurn() {

    }
}