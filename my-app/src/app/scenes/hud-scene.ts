import { Player } from '../objects/player';
import { Card } from '../objects/card';
import { CardService } from '../services/card.service';
import { readPatchedData } from '@angular/core/src/render3/util';
import { Enemy } from '../objects/enemy';
import { RoundService } from '../services/round.service';
import { Utils } from '../services/utils';
import { MerchantService } from '../services/merchant.service';
import { Options } from 'selenium-webdriver';
import { OptionScene } from './options-scene';
import { EndGameService } from '../services/endGame.service';
var sprite;
var heroSprite;
var enemySprite;
var attackHeroSprite;
var rect;
var graph;
var lifeText;
var armorText;
var attackText;
var handText;
var journeyX = 0;
var enemyName;
var enemyFrame;
var spriteJourney;
var animEnemy;
var currentArmor = 0;
var waitShow = 0;
var animEnemyAttack;
var saveCurrentArmor = 0;
var saveCurrentHealth = 0;
var saveCurrentAttack = 0;
var parchment;
var statutIsplayed;
var bulleH;
var bulle;
var Option1;
var Option2;
var Option3;
var OptionMerchant;
var nb_deck;
var endturn_clicked : boolean = false;
var deck;

export class HudScene extends Phaser.Scene {

  card: Card;
  player: Player;
  fakePlayer: Enemy;

  cards: Card[];
  deck: Card[];

  ratio: number;
  width: number;
  height: number;

  initCard: number = -750;

  handCardSprites: Phaser.GameObjects.Sprite[] = [];

  parchment: Phaser.GameObjects.Image;

  px : string;

  _cardService = new CardService();
  _roundService = new RoundService();
  _merchantService = new MerchantService();
  _endGameService = new EndGameService();


  constructor() {
    super({
      key: "HudScene"
    })

    this.ratio = Number(localStorage.getItem("resolution_ratio"));
  }

      

    create(): void {
    if(!this.ratio) {
      this.ratio = 1.875;
  }

  if(this.ratio == 1.00) {
      this.px = "30px"
  } else if(this.ratio == 1.50) {
      this.px = "20px"
  }else{

    this.px = "16px";
  }
    let _this = this;
  

    this.width = this.game.config.width as number;
    this.height = this.game.config.height as number;

    this.player = new Player(this.cache.json.get("player")); // Add the player

    this.fakePlayer = new Enemy(this.cache.json.get("enemy")[journeyX][Utils.getRandomInt(this.cache.json.get("enemy")[journeyX].length)]); // Add the enemy (n° day, 0/1)
    enemyName = this.fakePlayer.getName();
    enemyFrame = this.fakePlayer.getFrame();

    this.cards = new Array<Card>();

    for (let cardObj of this.cache.json.get("cards")) {
      this.cards.push(cardObj);
    }

    var theme = this.sound.add("game");
    theme.play('', { loop: true });

    this.deck = this._cardService.createDeck(this.cards);

    this.player.setDeck(this.deck);

    this.cameras.main.startFollow(this.add.text(0, 0, 'the deck is ' + this.deck.toString()).setOrigin(0.5), false);

    this.createBackground(); // Creat background méthod
    this.createProgressbar(); // Creat progreess bar méthod
    this.createHero(); // Creat Hero méthod
    this.createEnemy(enemyName, enemyFrame); // Creat Hero méthod
    this.createEndRound(_this); // Creat end round méthod
    this.createJourney(journeyX); //Update journey
    this.createDeck(); // Creat deck méthod


    this.parchment = this.add.image(-350 / this.ratio, -100 / this.ratio, 'parchment');
    this.parchment.setDisplaySize(350 / this.ratio, 200 / this.ratio);
    this.parchment.alpha = 0.8;
    this.parchment.setVisible(false);

    this._roundService.startRoundPlayer(this.player, this.fakePlayer);
    this.addCardInHand(_this);
  }

  private createBackground() {

    var bgAnimation = this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('background', { start: 1, end: 7 }),
      frameRate: 5,
      repeat: -1,
      yoyo: true


    });
    sprite = this.add.sprite(0 / this.ratio, 0 / this.ratio, 'background');
    sprite.setDisplaySize(this.width, this.height);
    sprite.play('run');
  }

  private createProgressbar() {

    var health = this.add.image(-920 / this.ratio, -500 / this.ratio, 'coeur');
    health.setDisplaySize(70 / this.ratio, 57 / this.ratio);
    var armor = this.add.image(-920 / this.ratio, -400 / this.ratio, 'armor');
    armor.setDisplaySize(60 / this.ratio, 49 / this.ratio);
    var attack = this.add.image(-920 / this.ratio, -300 / this.ratio, 'attack');
    attack.setDisplaySize(70 / this.ratio, 70 / this.ratio);
    var hand = this.add.image(-920 / this.ratio, -200 / this.ratio, 'hand');
    hand.setDisplaySize(70 / this.ratio, 57 / this.ratio);

    lifeText = this.add.text(-870 / this.ratio, -500 / this.ratio, '' + this.player.getCurrentHealth(), {
      fontfamily: 'BIT',
      fontSize: '32px',
      fill: "white",
      align: "center"
    });

    armorText = this.add.text(-870 / this.ratio, -400 / this.ratio, '' + this.player.getCurrentArmor(), {
      fontfamily: 'BIT',
      fontSize: '32px',
      fill: "white",
      align: "center"
    });
    attackText = this.add.text(-870 / this.ratio, -300 / this.ratio, '' + this.player.getCurrentAttack(), {
      fontfamily: 'BIT',
      fontSize: '32px',
      fill: "white",
      align: "center"
    });
    handText = this.add.text(-870 / this.ratio, -200 / this.ratio, '' + this.player.getCurrentActionPoint(), {
      fontfamily: 'BIT',
      fontSize: '32px',
      fill: "white",
      align: "center"
    });
  }

  private addCardInHand(_this: this) {  // Add card + Event on click card
    this.initCard = -750;
    for (let handCard of this.player.getHand()) {
      sprite = this.add.sprite((this.initCard += 250) / this.ratio, 400 / this.ratio, handCard.spriteUrl) as any;
      sprite.setDisplaySize(200 / this.ratio, 200 / this.ratio);
      sprite.setInteractive();
      sprite.card = handCard;
      this.handCardSprites.push(sprite);
    }
    for (let cardSprite of this.handCardSprites) {

      let textCard = this.make.text({
        x: -470 / this.ratio,
        y: -140 / this.ratio,
        text: (cardSprite as any).card.description,
        style: {
          font: 'bold 16px Arial',
          fill: 'black',
          textAlign: 'center',
          wordWrap: { width: 280 / this.ratio }
        }
      });


      textCard.setVisible(false);


      cardSprite.on("pointerdown", () => {
        statutIsplayed = _this._cardService.isPlayed(_this.player, (cardSprite as any).card);
        currentArmor = this.player.getCurrentArmor();

        if (!statutIsplayed) {
          if (this.player.getIsStuned()) {
            var noselect = this.sound.add("noselect");
            noselect.play();

            var text = this.add.text(-200 / this.ratio, -400 / this.ratio, 'STTTTUUUUNNNNNN', {
              font: 'Arial',
              fontSize: '64px',
              fill: "white",
              align: "center"

            });
            text.setVisible(true);
            setTimeout(() => {
              text.destroy();
            }, 1000);


          } else {
            var noselect2 = this.sound.add("noselect");
            noselect2.play();

            var text = this.add.text(-200 / this.ratio, -400 / this.ratio, 'You have no point of action !!!', {
              font: 'Britannic Bold',
              fontSize: '64px',
              fill: "white",
              align: "center"

            });
            setTimeout(() => {
              text.destroy();
            }, 500);



          }
          return;
        } else {

          var cardmp3 = this.sound.add("carte");
          cardmp3.play();

          _this.parchment.setVisible(false);
          textCard.setVisible(false);
          cardSprite.destroy();

        }

        if (saveCurrentArmor != this.player.getCurrentArmor()) {
          //boost_armor
          var armormp3 = this.sound.add("boost1");
          armormp3.play();

          var configBoostArmor = {
            key: 'boostArmor',
            frames: this.anims.generateFrameNumbers("boost_armor", { start: 0, end: 10 }),
            frameRate: 30,

          };

          this.anims.create(configBoostArmor);

          var boostArmor = this.add.sprite(-800 / this.ratio, 150 / this.ratio, "boost_armor");
          boostArmor.setDisplaySize(250 / this.ratio, 250 / this.ratio);
          boostArmor.alpha = 0.5;
          boostArmor.anims.play('boostArmor');

          setTimeout(() => {
            boostArmor.destroy();
          }, 500);

        }

        if (saveCurrentHealth < this.player.getCurrentHealth()) {
          //boost_Health

          var healthmp3 = this.sound.add("boost2");
          healthmp3.play();

          var configBoostHealth = {
            key: 'boostHealth',
            frames: this.anims.generateFrameNumbers("boost_health", { start: 0, end: 10 }),
            frameRate: 30,

          };

          this.anims.create(configBoostHealth);

          var boostHealth = this.add.sprite(-800 / this.ratio, 150 / this.ratio, "boost_health");
          boostHealth.setDisplaySize(250 / this.ratio, 250 / this.ratio);
          boostHealth.alpha = 0.5;
          boostHealth.anims.play('boostHealth');

          setTimeout(() => {
            boostHealth.destroy();
          }, 500);

        }
        if (saveCurrentAttack < this.player.getCurrentAttack()) {
          //boost_attack
          var attackmp3 = this.sound.add("boost3");
          attackmp3.play();

          var configBoostAttack = {
            key: 'boostAttack',
            frames: this.anims.generateFrameNumbers("boost_attack", { start: 0, end: 10 }),
            frameRate: 30,

          };

          this.anims.create(configBoostAttack);

          var boostAttack = this.add.sprite(-800 / this.ratio, 150 / this.ratio, "boost_attack");
          boostAttack.setDisplaySize(250 / this.ratio, 250 / this.ratio);
          boostAttack.alpha = 0.5;
          boostAttack.anims.play('boostAttack');

          setTimeout(() => {
            boostAttack.destroy();
          }, 500);

        }
        saveCurrentArmor = this.player.getCurrentArmor();
        saveCurrentHealth = this.player.getCurrentHealth();
        saveCurrentAttack = this.player.getCurrentAttack();

      });
      cardSprite.on('pointerover', function(event, gameObjects) {

        _this.parchment.setVisible(true);
        textCard.setVisible(true);


      });
      cardSprite.on('pointerout', function(event, gameObjects) {

        _this.parchment.setVisible(false);
        textCard.setVisible(false);


      });
    }
  }

  private createHero() {

    var configHero = {
      key: 'hero',
      frames: this.anims.generateFrameNumbers('hero_idle', { start: 0, end: 2 }),
      frameRate: 5,
      repeat: -1
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
      yoyo: true

    };
    this.anims.create(configAttackHero);

  }

  private createEnemy(name: string, frame: number) {     //Create automatick enemy from json (because different frame of sprite enemy)

    ///////////ATTENTION ICI PEUT SPAWN UN MARCHANT => CONDIFTION POUR AFFICHAGE
    if (this.fakePlayer.getName() == "Yogstot") {

      this.scene.start("EndGameScene",{fin:this._endGameService.getEnd(this.player)});
     

    }

    if (this.fakePlayer.getName() == "Merchant") {
      var marchentOption = this._merchantService.createOptions(this.cards);
      bulle = this.add.image(390 / this.ratio, -120 / this.ratio, 'bulle_merchant');
      bulle.setDisplaySize((700) / this.ratio, (600) / this.ratio);
      OptionMerchant = this.add.text(170 / this.ratio, -350 / this.ratio, marchentOption.text, {

        fontfamily: 'Arial Black',
        fontSize: this.px,
        fill: "black",
        align: "center",
        wordWrap: { width: 450 / this.ratio }

      });

      bulleH = this.add.image(-400 / this.ratio, -120 / this.ratio, 'bulle_hero');
      bulleH.setDisplaySize((700) / this.ratio, (400) / this.ratio);
      Option1 = this.add.text(-650 / this.ratio, -200 / this.ratio, "Option : 1   -1 Health\n", {
        fontfamily: 'Arial',
        fontWeight: 'bold',
        fontSize: this.px,
        fill: "purple",
        align: "center",
        // wordWrap: { width: 450 / this.ratio }
      });
      Option1.setInteractive();
      Option1.on("pointerdown", () => {
        this._merchantService.chooseOption(this.player, marchentOption.options[0]);
        Option1.destroy();
      });
      Option2 = this.add.text(-650 / this.ratio, -150 / this.ratio, "Option : 2   -2 Health\n", {
        fontfamily: 'Arial',
        fontWeight: 'bold',
        fontSize: this.px,
        fill: "black",
        align: "center",
        // wordWrap: { width: 450 / this.ratio }
      });
      Option2.setInteractive();
      Option2.on("pointerdown", () => {
        this._merchantService.chooseOption(this.player, marchentOption.options[1]);
        Option2.destroy();
      });
      Option3 = this.add.text(-650 / this.ratio, -100 / this.ratio, "Option : 3   -3 Health\n", {
        fontfamily: 'Arial',
        fontWeight: 'bold',
        fontSize: this.px,
        fill: "black",
        align: "center",
        // wordWrap: { width: 450 / this.ratio }
      });
      Option3.setInteractive();
      Option3.on("pointerdown", () => {
        this._merchantService.chooseOption(this.player, marchentOption.options[2]);
        Option3.destroy();

      });

    }

    if (enemySprite) {
      enemySprite.destroy();
      animEnemy.destroy();
    }
    var configEnemy = {
      key: 'enemy',
      frames: this.anims.generateFrameNumbers(name, { start: 0, end: frame }),  //end: frame = nb frame of enemy sprite name = enemy random
      frameRate: 6,
      repeat: -1
    };

    animEnemy = this.anims.create(configEnemy);
    enemySprite = this.add.sprite(0 / this.ratio, 150 / this.ratio, name);
    enemySprite.setDisplaySize((enemySprite.width / 2) / this.ratio, (enemySprite.height / 2) / this.ratio);
    enemySprite.anims.play('enemy');


  }

  private createEndRoundEnemy(_this: this) {
    this._roundService.endRoundPlayer(this.player, this.fakePlayer); // END ROUND PLAYER
    if (this.fakePlayer.getCurrentHealth() <= 0) {
     
      let text = this.add.text(0, 0, "Day " + journeyX);

      text.setVisible(false);

      this.cameras.main.fadeOut(3000, 1, 1, 1, () => {}, this);
      setTimeout(() => {
       
        
      this.fakePlayer = new Enemy(this.cache.json.get("enemy")[journeyX][Utils.getRandomInt(this.cache.json.get("enemy")[journeyX].length)]); // Add the enemy (n° day, 0/1)
      enemyName = this.fakePlayer.getName();
      enemyFrame = this.fakePlayer.getFrame();
      this.createEnemy(enemyName, enemyFrame);   // NEW ENEMY or MERCHENT
      this._roundService.startRoundPlayer(this.player, this.fakePlayer); // START ROUND OF PLAYER
      this.initCard = -750;
      this.deleteCards(); // DELETE HAND CARDS
      this.addCardInHand(_this); // NEW HAND
      saveCurrentArmor = this.player.getCurrentArmor();
      saveCurrentHealth = this.player.getCurrentHealth();
      saveCurrentAttack = this.player.getCurrentAttack();
      journeyX++;
      this.createJourney(journeyX); // NEW JOURNEY
      endturn_clicked = false;

    }, 3000);
      this.cameras.main.on("camerafadeoutcomplete", () => {
        text.setVisible(true);
        this._roundService.initPlayerForBattle(this.player);

        _this.cameras.main.fadeIn(3000, 1, 1, 1, () => { }, this);
      });
      this.cameras.main.on("camerafadeincomplete", () => {
        text.setVisible(false);
      });
      return;
    }else if (this.player.getCurrentHealth() <= 0) {
      journeyX = 0;
      this.scene.start("MainMenuScene");
    }

    this._roundService.startRoundEnemy(this.player, this.fakePlayer);  // START ROUND OF ENEMY
    this._roundService.roundEnemy(this.fakePlayer); // ROUND OF ENEMY

    var attackmp3 = this.sound.add("monster_attack");

    setTimeout(() => {
      attackmp3.play();

      if (this.fakePlayer.getCurrentAttack() > 0) {  // SPRITE ATTACK ENEMY
        setTimeout(() => {
          this.attackEnemy()
        }, 1500);

      }else{
        endturn_clicked = false;
      }

    }, 500);
    this._roundService.endRoundEnemy(this.player, this.fakePlayer);

    if (this.fakePlayer.getCurrentHealth() <= 0) {

      journeyX++;
      this.createJourney(journeyX);

      this._roundService.initPlayerForBattle(this.player);

      this.fakePlayer = new Enemy(this.cache.json.get("enemy")[journeyX][Utils.getRandomInt(this.cache.json.get("enemy")[journeyX].length)]); // Add the enemy (n° day, 0/1)
      enemyName = this.fakePlayer.getName();
      enemyFrame = this.fakePlayer.getFrame();
      this.createEnemy(enemyName, enemyFrame);
      this._roundService.startRoundPlayer(this.player, this.fakePlayer);
      this.initCard = -750;
      this.deleteCards();
      this.addCardInHand(_this);
      saveCurrentArmor = this.player.getCurrentArmor();
      saveCurrentHealth = this.player.getCurrentHealth();
      saveCurrentAttack = this.player.getCurrentAttack();
      return;
    } else if (this.player.getCurrentHealth() <= 0) {
      journeyX = 0;
      this.scene.start("MainMenuScene");
    }

    this._roundService.startRoundPlayer(this.player, this.fakePlayer);
    this.initCard = -750;
    this.deleteCards();
    this.addCardInHand(_this);
    saveCurrentArmor = this.player.getCurrentArmor();
    saveCurrentHealth = this.player.getCurrentHealth();
    saveCurrentAttack = this.player.getCurrentAttack();

    _this.attackHero();
  }

  private createEndRoundMerchant(_this: this) {
    bulle.destroy();
    bulleH.destroy();
    OptionMerchant.destroy();
    Option1.destroy();
    Option2.destroy();
    Option3.destroy();

    let text = this.add.text(0, 0, "Day " + journeyX);

    text.setVisible(false);

    this.cameras.main.fadeOut(3000, 1, 1, 1, () => {
    }, this);
    setTimeout(() => {
    journeyX++;
    this.createJourney(journeyX); // NEW JOURNEY
    
    this._roundService.initPlayerForBattle(this.player);

    this.fakePlayer = new Enemy(this.cache.json.get("enemy")[journeyX][Utils.getRandomInt(this.cache.json.get("enemy")[journeyX].length)]); // Add the enemy (n° day, 0/1)
    enemyName = this.fakePlayer.getName();
    enemyFrame = this.fakePlayer.getFrame();
    this.createEnemy(enemyName, enemyFrame);   // NEW ENEMY or MERCHENT
    this._roundService.startRoundPlayer(this.player, this.fakePlayer); // START ROUND OF PLAYER
    this.initCard = -750;
    this.deleteCards(); // DELETE HAND CARDS
    this.addCardInHand(_this); // NEW HAND
    saveCurrentArmor = this.player.getCurrentArmor();
    saveCurrentHealth = this.player.getCurrentHealth();
    saveCurrentAttack = this.player.getCurrentAttack();
    endturn_clicked = false;
  }, 3000);

    this.cameras.main.on("camerafadeoutcomplete", () => {
      text.setVisible(true);

      

     

      _this.cameras.main.fadeIn(3000, 1, 1, 1, () => { }, this);
    });
    this.cameras.main.on("camerafadeincomplete", () => {
      text.setVisible(false);
    });
    return;
  }

  private createEndRound(_this: this) {  // END of ROUND + Event on click end turn

    
    handText.text = this.player.getCurrentActionPoint();
    var endRound = this.add.image(760 / this.ratio, 250 / this.ratio, 'endround');
    endRound.setDisplaySize(200 / this.ratio, 100 / this.ratio);
    endRound.setInteractive();
    endRound.on("pointerdown", () => {
      if(!endturn_clicked)
      {
        endturn_clicked = true;

        if (this.fakePlayer.getName() !== "Merchant") {
          this.createEndRoundEnemy(this);

        } else {
          this.createEndRoundMerchant(this);
        }
        
      }
    })

  }

  private attackHero() {

    var attackmp3 = this.sound.add("epee");
    attackmp3.play();

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

    var configEnemyAnim = {
      key: 'enemyDamage',
      frames: this.anims.generateFrameNumbers("anim_attack_enemy", { start: 0, end: 11 }),  //end: frame = nb frame of enemy sprite name = enemy random
      frameRate: 30,
      //repeat : -1
    };

    animEnemyAttack = this.anims.create(configEnemyAnim);

    var damage = this.add.sprite(0 / this.ratio, 150 / this.ratio, "anim_attack_enemy");
    damage.setDisplaySize(250 / this.ratio, 250 / this.ratio);
    damage.anims.play('enemyDamage');

    setTimeout(() => {
      damage.destroy();
    }, 1200);

  }

  private attackEnemy() {

    enemySprite.x -= 200;
    setTimeout(() => {
      enemySprite.x += 200;
    }, 1000);

    var configHeroAnim = {
      key: 'heroDamage',
      frames: this.anims.generateFrameNumbers("anim_attack_hero", { start: 0, end: 11 }),  //end: frame = nb frame of enemy sprite name = enemy random
      frameRate: 30,
      //repeat : -1
    };

    var animHeroAttack = this.anims.create(configHeroAnim);

    var damageHero = this.add.sprite(-800 / this.ratio, 150 / this.ratio, "anim_attack_hero");
    damageHero.setDisplaySize(250 / this.ratio, 250 / this.ratio);
    damageHero.anims.play('heroDamage');

    setTimeout(() => {
      damageHero.destroy();
      endturn_clicked = false;
    }, 1200);

    // }, 1500);
  }

  private createJourney(journey: number) {

    if (spriteJourney) {
      spriteJourney.destroy();
    }
    spriteJourney = this.add.sprite(0 / this.ratio, -473 / this.ratio, 'journey', journey);
    spriteJourney.setDisplaySize(1000 / this.ratio, 100 / this.ratio);
  }

  private deleteCards() {

    for (let cardSprite of this.handCardSprites) {


      cardSprite.destroy();
    }

  }

  private createDeck() {



    deck = this.add.image(760 / this.ratio, 410 / this.ratio, 'deck');
    deck.setDisplaySize(200 / this.ratio, 200 / this.ratio);

    nb_deck = this.add.text(800 / this.ratio, 450 / this.ratio, '' + this.player.getDeck().length, {
      fontfamily: 'BIT',
      fontSize: '32px',
      fill: "white",
      align: "center"
    });
  }

  update(): void {

    lifeText.text = this.player.getCurrentHealth();
    armorText.text = this.player.getCurrentArmor();
    attackText.text = this.player.getCurrentAttack();
    nb_deck.text = this.player.getDeck().length;

    if (statutIsplayed) {
      handText.text = this.player.getCurrentActionPoint();
    }
    // if(sprite.input.pointerOver())
    // {

    //     parchment.visible = true;
    // }
  }

  cardClicked() {

  }

  endTurn() {

  }

  rerollTurn() {

  }
}
