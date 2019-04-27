import { Player } from '../objects/player';
import { Card } from '../objects/card';
import { CardService } from '../services/card.service';

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
        this.add.image(400, 300, 'background_tree');
        this.add.image(400, 300, 'tree');

        this.cards = new Array<Card>();

        for(let cardObj of this.cache.json.get("cards")) {

            this.cards.push(cardObj);
        }

        this.deck = this._cardService.createDeck(this.cards);
    
        this.cameras.main.startFollow(this.add.text(0, 0, 'the deck is ' + this.deck.toString()).setOrigin(0.5), false);
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