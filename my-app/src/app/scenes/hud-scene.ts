import { Player } from '../objects/player';
import { Card } from '../objects/card';
import { CardService } from '../services/card.service';
import { readPatchedData } from '@angular/core/src/render3/util';
import { Enemy } from '../objects/enemy';
import { RoundService } from '../services/round.service';
var sprite;
var cursor;
var heroSprite;
var attackHeroSprite;

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

        this.createBackground(); // Creat background méthod
        this.createProgressbar(); // Creat progreess bar méthod
        this.createHero(); // Creat Hero méthod
        this.createEndRound();
       
       

       
    }

    private createBackground() {

        var bgAnimation = this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('background', { start: 1, end: 7 }),
            frameRate: 5,
            repeat : -1,
            yoyo : true
            
            
        });
        sprite = this.add.sprite(0 / this.ratio, 0 / this.ratio, 'background');
        sprite.setDisplaySize(this.width, this.height);
        sprite.play('run');
    }

    private createProgressbar() {
        let _this = this;
        var health = this.add.image(-920 / this.ratio , -500 / this.ratio , 'coeur');
        health.setDisplaySize(70 / this.ratio, 57 / this.ratio);
        var armor = this.add.image(-920 / this.ratio , -400 / this.ratio , 'armor');
        armor.setDisplaySize(60 / this.ratio, 49 / this.ratio);
        var attack = this.add.image(-920 / this.ratio , -300 / this.ratio , 'attack');
        attack.setDisplaySize(70 / this.ratio, 70 / this.ratio);
        attack.setInteractive();
        this.input.on('gameobjectdown',() => {
            _this.attackHero();
        }); // wait next graph of monsieurduba
       
         this.add.text(-870 / this.ratio , -500 / this.ratio, ''+this.player.getCurrentHealth(), {
            fontfamily : 'BIT',
            fontSize: '32px',
            fill: "white",
            align: "center"
        });
        this.add.text(-870 / this.ratio , -400 / this.ratio, ''+this.player.getCurrentArmor(), {
            fontfamily : 'BIT',
            fontSize: '32px',
            fill: "white",
            align: "center"
        });
        this.add.text(-870 / this.ratio , -300 / this.ratio, ''+this.player.getCurrentAttack(), {
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

    private createHero() {

        var configHero = {
            key: 'hero',
            frames: this.anims.generateFrameNumbers('hero_idle', { start: 0, end: 2 }),
            frameRate: 5,
            repeat : -1
            //yoyo : true
   
        };
        var anim = this.anims.create(configHero);

        heroSprite = this.add.sprite(-800 / this.ratio, 150 / this.ratio, 'hero_idle').setScale(1);
        heroSprite.setDisplaySize(200 / this.ratio, 300 / this.ratio);
        heroSprite.anims.play('hero');


        var configAttackHero = {
            key: 'heroAttack',
            frames: this.anims.generateFrameNumbers('hero_attack', { start: 0, end: 6 }),
            frameRate: 10,
            //repeat : -1,
            yoyo : true

        };
        this.anims.create(configAttackHero);

    }

    private createEndRound() {

        var endRound = this.add.image(100 / this.ratio , 200 / this.ratio , 'endround');
        endRound.setDisplaySize(70 / this.ratio, 57 / this.ratio);

    }

     private attackHero(){
     
        heroSprite.visible = false;

        attackHeroSprite = this.add.sprite(-800 / this.ratio, 150 / this.ratio, 'hero_attack').setScale(1);
        attackHeroSprite.setDisplaySize(200 / this.ratio, 300 / this.ratio);
        attackHeroSprite.anims.play('heroAttack');

        attackHeroSprite.x += 200;
        setTimeout(() => {
            attackHeroSprite.x -= 200;
            heroSprite.visible = true;
            attackHeroSprite.visible = false;
         }, 1000);
       
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