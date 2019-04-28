import { Player } from '../objects/player';
import { Card } from '../objects/card';
import { CardService } from '../services/card.service';
import { readPatchedData } from '@angular/core/src/render3/util';
import { Enemy } from '../objects/enemy';
import { RoundService } from '../services/round.service';
var sprite;
export class HudScene extends Phaser.Scene {

    
    player : Player;
    fakePlayer : Enemy;

    cards : Card[];
    deck : Card[];

    ratio : number;
    width : number;
    height : number;

    _cardService = new CardService();
    _roundService = new RoundService();


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

        this.fakePlayer = new Enemy(this.cache.json.get("enemy")[0][0]);

       
        this.cards = new Array<Card>();

        for(let cardObj of this.cache.json.get("cards")) {
            console.log(cardObj);
            this.cards.push(cardObj);
        }

        this.deck = this._cardService.createDeck(this.cards);

        this.player.setDeck(this.deck);
    
        this.cameras.main.startFollow(this.add.text(0, 0, 'the deck is ' + this.deck.toString()).setOrigin(0.5), false);

        this.createBackground();
        var health = this.add.image(-920 / this.ratio , -500 / this.ratio , 'coeur');
        health.setDisplaySize(70 / this.ratio, 57 / this.ratio);
        var armor = this.add.image(-920 / this.ratio , -400 / this.ratio , 'armor');
        armor.setDisplaySize(60 / this.ratio, 49 / this.ratio);
        var attack = this.add.image(-920 / this.ratio , -300 / this.ratio , 'attack');
        attack.setDisplaySize(70 / this.ratio, 70 / this.ratio);
       
        var text = this.add.text(-870 / this.ratio , -500 / this.ratio, "5", {
            fontfamily : 'BIT',
            fontSize: '32px',
            fill: "white",
            align: "center"
        });

        this._roundService.startRoundPlayer(this.player, this.fakePlayer);

        console.log(this.player.getHand());
    }

    private createBackground() {

        var bgAnimation = this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('background', { start: 1, end: 7 }),
            frameRate: 5,
            repeat : -1,
            yoyo : true

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