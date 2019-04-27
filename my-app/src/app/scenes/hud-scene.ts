import { Player } from '../objects/player';
import { Card } from '../objects/card';
import { CardService } from '../services/card.service';
var sprite;
export class HudScene extends Phaser.Scene {

    
    player : Player;
    cards : Card[];
    deck : Card[];

    ratio : number;
    width : number;
    height : number;

    _cardService = new CardService();


    constructor() {
        super({
            key : "HudScene"
        })
        
        this.ratio = Number(localStorage.getItem("resolution_ratio"));

    }
    
    create() : void {
        
        this.width = this.game.config.width as number;
        this.height = this.game.config.height as number;

        this.player = new Player(this.cache.json.get("player"));
       
        this.cards = new Array<Card>();

        for(let cardObj of this.cache.json.get("cards")) {
            console.log(cardObj);
            this.cards.push(cardObj);
        }

        this.deck = this._cardService.createDeck(this.cards);

        console.log("" + this.deck);
    
        this.cameras.main.startFollow(this.add.text(0, 0, 'the deck is ' + this.deck.toString()).setOrigin(0.5), false);

        this.createBackground();
    }

    private createBackground() {

        var bgAnimation = this.anims.create({
            key: 'run',
            frames: [{ key: 'background', frame: 8 }],
            frameRate: 8,
        });

        var sprite = this.add.sprite(0 / this.ratio, 0 / this.ratio, 'background');
        sprite.setDisplaySize(this.width, this.height);
        sprite.play('run');
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