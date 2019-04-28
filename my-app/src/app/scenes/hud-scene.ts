import { Player } from '../objects/player';
import { Card } from '../objects/card';
import { CardService } from '../services/card.service';
import { readPatchedData } from '@angular/core/src/render3/util';
import { Enemy } from '../objects/enemy';
import { RoundService } from '../services/round.service';
import { Utils } from '../services/utils';
var sprite;
var heroSprite;
var attackHeroSprite;
var rect;
var graph;
var lifeText;
var armorText
var attackText
var journeyX = 0;
var enemyName;
var enemyFrame;
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

        this.player = new Player(this.cache.json.get("player")); // Add the player

        this.fakePlayer = new Enemy(this.cache.json.get("enemy")[journeyX][Utils.getRandomInt(this.cache.json.get("enemy")[journeyX].length - 1)]); // Add the enemy (n° day, 0/1)
        var enemyName = this.fakePlayer.getName();
        var enemyFrame = this.fakePlayer.getFrame();

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
        this.createEnemy(); // Creat Hero méthod
        this.createEndRound(_this); // Creat end round méthod
        this.createJourney(journeyX,enemyName,enemyFrame); //Update journey

        // rect = new Phaser.Geom.Rectangle(-150/ _this.ratio, 100/_this.ratio, 350 / _this.ratio, 150 / _this.ratio);
        // graph = this.add.graphics({ fillStyle: { color: 0x0060FF } });
        // graph.fillRectShape(rect);
        // graph.alpha = 0.5;
        // graph.inputEnabled = true;
        // graph.visible = true;

        this._roundService.startRoundPlayer(this.player, this.fakePlayer);
        this.addCardInHand(_this);
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

        var health = this.add.image(-920 / this.ratio , -500 / this.ratio , 'coeur');
        health.setDisplaySize(70 / this.ratio, 57 / this.ratio);
        var armor = this.add.image(-920 / this.ratio , -400 / this.ratio , 'armor');
        armor.setDisplaySize(60 / this.ratio, 49 / this.ratio);
        var attack = this.add.image(-920 / this.ratio , -300 / this.ratio , 'attack');
        attack.setDisplaySize(70 / this.ratio, 70 / this.ratio);


          lifeText = this.add.text(-870 / this.ratio , -500 / this.ratio, ''+this.player.getCurrentHealth(), {
            fontfamily : 'BIT',
            fontSize: '32px',
            fill: "white",
            align: "center"
        });
         console.log(lifeText);
         armorText = this.add.text(-870 / this.ratio , -400 / this.ratio, ''+this.player.getCurrentArmor(), {
            fontfamily : 'BIT',
            fontSize: '32px',
            fill: "white",
            align: "center"
        });
         attackText = this.add.text(-870 / this.ratio , -300 / this.ratio, ''+this.player.getCurrentAttack(), {
            fontfamily : 'BIT',
            fontSize: '32px',
            fill: "white",
            align: "center"
        });
    }

    private addCardInHand(_this: this) {
        for (let handCard of this.player.getHand()) {
            sprite = this.add.sprite((this.initCard += 250) / this.ratio, 400 / this.ratio, "blank_card") as any;
            sprite.setDisplaySize(200 / this.ratio, 200 / this.ratio);
            sprite.setInteractive();
            sprite.card = handCard;
            this.handCardSprites.push(sprite);
        }
        for (let cardSprite of this.handCardSprites) {
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

    private createEnemy(){

        var configEnemy = {
            key: 'enemy',
            frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 2 }),
            frameRate: 5,
            repeat : -1
            //yoyo : true

        };
        this.anims.create(configEnemy);

        heroSprite = this.add.sprite(-800 / this.ratio, 150 / this.ratio, 'hero_idle').setScale(1);
        heroSprite.setDisplaySize(200 / this.ratio, 300 / this.ratio);
        heroSprite.anims.play('hero');


    }
    private createEndRound(_this: this) {


        var endRound = this.add.image(760 / this.ratio , 250 / this.ratio , 'endround');
        endRound.setDisplaySize(200 / this.ratio, 100 / this.ratio);
        endRound.setInteractive();
        endRound.on("pointerdown", ()=> {

            this._roundService.endRoundPlayer(this.player,this.fakePlayer);

            if(this.fakePlayer.getCurrentHealth() <= 0 || this.player.getCurrentHealth() <= 0 )
            {
                // this._roundService.endBatlle();
                return;

            }

           this._roundService.startRoundEnemy(this.player,this.fakePlayer);
           this._roundService.roundEnemy(this.fakePlayer);
           this._roundService.endRoundEnemy(this.player,this.fakePlayer);
           if(this.player.getCurrentHealth() <= 0 || this.fakePlayer.getCurrentHealth() <= 0)
           {
               // this._roundService.endBatlle();
               return;
           }

           this._roundService.startRoundPlayer(this.player,this.fakePlayer);
           this.initCard  = -750;
           this.deleteCards();
           this.addCardInHand(_this);




          _this.attackHero();
        })

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

    private createJourney(journey : number, name : string, frame : number){

      this.add.sprite(0 / this.ratio , -473 / this.ratio , 'journey',journey);
    }

    private deleteCards(){

        for (let cardSprite of this.handCardSprites) {


                cardSprite.destroy();
        }

    }

    update() : void {

    lifeText.text = this.player.getCurrentHealth();
    armorText.text = this.player.getCurrentArmor();
    attackText.text = this.player.getCurrentAttack();


    }

    cardClicked() {

    }

    endTurn() {

    }

    rerollTurn() {

    }
}
