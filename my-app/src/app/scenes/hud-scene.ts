import { Player } from '../objects/player';
import { Card } from '../objects/card';
import { CardService } from '../services/card.service';
var sprite;
export class HudScene extends Phaser.Scene {

    
    player : Player;
    cards : Card[];
    deck : Card[];

    _cardService = new CardService();


    constructor() {
        

        super({
            key : "HudScene"
        })
    }
    
    create() : void {

        this.player = new Player(this.cache.json.get("player"));
       
        this.cards = new Array<Card>();

        for(let cardObj of this.cache.json.get("cards")) {
            console.log(cardObj);
            this.cards.push(cardObj);
        }

        this.deck = this._cardService.createDeck(this.cards);

        console.log("" + this.deck);
    
        this.cameras.main.startFollow(this.add.text(0, 0, 'the deck is ' + this.deck.toString()).setOrigin(0.5), false);

        /*********BACGROUND *************/
        var bgAnimation = this.anims.create({
            key: 'run',
            frames: [{key :'background', frame : 8}],
            frameRate: 8
        });
    
        var sprite = this.add.sprite(50, 300, 'background').setScale(4);
    
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