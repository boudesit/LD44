import {ROOT_CONST} from "../const/root.const"

export class PreloadScene extends Phaser.Scene {

    loadingBar : Phaser.GameObjects.Image;

    constructor() {
        super({
            key : "PreloadScene"
        });
    }


    preload() : void {
        let _this=this;
        this.loadingBar =  this.add.image(this.game.config.width as number / 2, this.game.config.height as number / 2, "loading");

        /**********************************************/
        /*****************JSON*************************/
        /**********************************************/
        this.load.json("options","configuration/env-config.json");
        this.load.json("cards","assets/json/cards.json");
        this.load.json("enemy","assets/json/enemy.json");
        this.load.json("player","assets/json/player.json");

        /**********************************************/
        /*****************SPRITESHEET******************/
        /**********************************************/
        this.load.spritesheet('background', 'assets/background/BG_JEU.png',{ frameWidth: 1920, frameHeight: 1080 });

        this.load.spritesheet('hero_idle', 'assets/sprites/hero_idle_sprite.png',{ frameWidth: 200, frameHeight: 300 });
        this.load.spritesheet('hero_attack', 'assets/sprites/hero_attack_sprite.png',{ frameWidth: 200, frameHeight: 300 });
        this.load.spritesheet('journey', 'assets/images/parcours.png',{ frameWidth: 1000, frameHeight: 100 });


        this.load.spritesheet('spider', 'assets/enemy/enemy_1.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('spider2', 'assets/enemy/enemy_11.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Hobgoblin', 'assets/enemy/enemy_2.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Hobgoblin0', 'assets/enemy/enemy_12.png',{ frameWidth: 600, frameHeight: 600 });

        this.load.spritesheet('boost_attack', 'assets/animations/boost_yellow.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('boost_armor', 'assets/animations/boost_green.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('boost_health', 'assets/animations/boost_red.png',{ frameWidth: 600, frameHeight: 600 });

        this.load.spritesheet('anim_attack_enemy', 'assets/animations/anim_attack_enemy.png',{ frameWidth: 500, frameHeight: 500 });
        this.load.spritesheet('anim_attack_hero', 'assets/animations/anim_attack_hero.png',{ frameWidth: 500, frameHeight: 500 });

        this.load.spritesheet('deck', 'assets/images/deck.png',{ frameWidth: 200, frameHeight: 200 });
       


     
        

        this.load.image("blank_card",'assets/Cards/Carte_0.png');


        this.load.image("coeur",'assets/images/coeur.png');
        this.load.image("armor",'assets/images/armor.png');
        this.load.image("attack",'assets/images/attack.png');
        this.load.image("endround",'assets/images/FinTour.png');

        this.load.on('progress', (value : number) => {
            _this.loadingBar.setCrop(0, 0,525 * value, 900);
        });
    }

    create() : void {

        setTimeout(() => {
            this.scene.start("MainMenuScene");

        }, 2000);
    }

    update() : void { }
}