import { Player } from '../objects/player';
import { Card } from '../objects/card';
import { CardService } from '../services/card.service';
import { readPatchedData } from '@angular/core/src/render3/util';
var sprite;
var cursor;
var heroSprite;
var attackHeroSprite;

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

        this.createBackground(); // Creat background méthod
        this.createProgressbar(); // Creat progreess bar méthod
        this.createHero(); // Creat Hero méthod
       
       

       
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
       
        var text = this.add.text(-870 / this.ratio , -500 / this.ratio, "5", {
            fontfamily : 'BIT',
            fontSize: '32px',
            fill: "white",
            align: "center"
        });
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


        var confiAttackgHero = {
            key: 'heroAttack',
            frames: this.anims.generateFrameNumbers('hero_attack', { start: 0, end: 6 }),
            frameRate: 5,
            //repeat : -1,
            yoyo : true
   
        };
        this.anims.create(confiAttackgHero);

    }

   

    // onObjectClicked()  // wait next graph of monsieurduba
    // {
    //   this.attackHero();

    //     // heroSprite.x += 200;
    //     // setTimeout(() => {
    //     //       heroSprite.x -= 200;
    //     //  }, 500);
 
    // }

    private attackHero(){

        attackHeroSprite = this.add.sprite(-800 / this.ratio, 150 / this.ratio, 'hero_attack').setScale(1);
        attackHeroSprite.setDisplaySize(200 / this.ratio, 300 / this.ratio);
        attackHeroSprite.anims.play('heroAttack');
      

       
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