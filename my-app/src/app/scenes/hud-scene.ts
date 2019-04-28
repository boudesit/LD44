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

    initCard : number = -750;

    handCardSprites : Phaser.GameObjects.Sprite[] = [];

    _cardService = new CardService();
    _roundService = new RoundService();


    constructor() {
        super({
            key : "HudScene"
        })
        
        this.ratio = Number(localStorage.getItem("resolution_ratio"));
        
    }
    
    create() : void {
        let _this = this;
        
        this.width = this.game.config.width as number;
        this.height = this.game.config.height as number;

        this.player = new Player(this.cache.json.get("player"));

        this.fakePlayer = new Enemy(this.cache.json.get("enemy")[0][0]);

       
        this.cards = new Array<Card>();

        for(let cardObj of this.cache.json.get("cards")) {
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

        this.addCardInHand(_this);
    }

    private addCardInHand(_this: this) {
        for (let handCard of this.player.getHand()) {
            let sprite = this.add.sprite((this.initCard += 250) / this.ratio, 400 / this.ratio, "blank_card") as any;
            sprite.setDisplaySize(200 / this.ratio, 200 / this.ratio);
            sprite.setInteractive();
            sprite.card = handCard;
            this.handCardSprites.push(sprite);
        }
        for (let cardSprite of this.handCardSprites) {
            cardSprite.on("pointerover", (event, other) => {

                var rect = new Phaser.Geom.Rectangle((_this.initCard  += 250) / _this.ratio, 200 / _this.ratio, 300 / _this.ratio, 200 / _this.ratio);
                var graphics = this.add.graphics({ fillStyle: { color: 0x000000 } });
            
                graphics.fillRectShape(rect);
            
                console.log((cardSprite as any).card);
            });
            cardSprite.on("pointerdown", () => {
                _this._cardService.isPlayed(_this.player, (cardSprite as any).card);
                cardSprite.destroy();
            });
        }
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