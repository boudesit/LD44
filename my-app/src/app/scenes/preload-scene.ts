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
        this.load.spritesheet('parchment', 'assets/images/parchment.png',{ frameWidth: 350, frameHeight: 200 });


            //Enemy
        this.load.spritesheet('Spidy', 'assets/enemy/enemy_1.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Frodo', 'assets/enemy/enemy_2.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Razmo', 'assets/enemy/enemy_3.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Cultiz', 'assets/enemy/enemy_4.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Caspor', 'assets/enemy/enemy_5.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Bigznoise', 'assets/enemy/enemy_6.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Slid', 'assets/enemy/enemy_7.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Coweird', 'assets/enemy/enemy_8.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Chtoing', 'assets/enemy/enemy_9.png',{ frameWidth: 600, frameHeight: 600 });
      
       
       
        this.load.spritesheet('Hobgoblin0', 'assets/enemy/enemy_12.png',{ frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('merchant', 'assets/enemy/shop_1.png',{ frameWidth: 600, frameHeight: 600 });

            //Boost
        this.load.spritesheet('boost_attack', 'assets/animations/boost_yellow.png',{ frameWidth: 500, frameHeight: 500 });
        this.load.spritesheet('boost_armor', 'assets/animations/boost_green.png',{ frameWidth: 500, frameHeight: 500 });
        this.load.spritesheet('boost_health', 'assets/animations/boost_red.png',{ frameWidth: 500, frameHeight: 500 });

            //anim_attack
        this.load.spritesheet('anim_attack_enemy', 'assets/animations/anim_attack_enemy.png',{ frameWidth: 500, frameHeight: 500 });
        this.load.spritesheet('anim_attack_hero', 'assets/animations/anim_attack_hero.png',{ frameWidth: 500, frameHeight: 500 });

            //Deck
        this.load.spritesheet('deck', 'assets/images/deck.png',{ frameWidth: 200, frameHeight: 200 });

        this.load.image("coeur",'assets/images/coeur.png');
        this.load.image("armor",'assets/images/armor.png');
        this.load.image("attack",'assets/images/attack.png');
        this.load.image("endround",'assets/images/FinTour.png');
        this.load.image("hand",'assets/images/main.png');


        this.load.image("Carte_1",'assets/Cards/Carte_1.png');
        this.load.image("Carte_2",'assets/Cards/Carte_2.png');
        this.load.image("Carte_3",'assets/Cards/Carte_3.png');
        this.load.image("Carte_4",'assets/Cards/Carte_4.png');
        this.load.image("Carte_5",'assets/Cards/Carte_5.png');
        this.load.image("Carte_6",'assets/Cards/Carte_6.png');
        this.load.image("Carte_7",'assets/Cards/Carte_7.png');
        this.load.image("Carte_8",'assets/Cards/Carte_8.png');
        this.load.image("Carte_9",'assets/Cards/Carte_9.png');
        this.load.image("Carte_10",'assets/Cards/Carte_10.png');
        
        this.load.image("Carte_11",'assets/Cards/Carte_11.png');
        this.load.image("Carte_12",'assets/Cards/Carte_12.png');
        this.load.image("Carte_13",'assets/Cards/Carte_13.png');
        this.load.image("Carte_14",'assets/Cards/Carte_14.png');
        this.load.image("Carte_15",'assets/Cards/Carte_15.png');
        this.load.image("Carte_16",'assets/Cards/Carte_16.png');
        this.load.image("Carte_17",'assets/Cards/Carte_17.png');
        this.load.image("Carte_18",'assets/Cards/Carte_18.png');
        this.load.image("Carte_19",'assets/Cards/Carte_19.png');
        this.load.image("Carte_20",'assets/Cards/Carte_20.png');

        this.load.image("Carte_21",'assets/Cards/Carte_21.png');
        this.load.image("Carte_22",'assets/Cards/Carte_22.png');
        this.load.image("Carte_23",'assets/Cards/Carte_23.png');
        this.load.image("Carte_24",'assets/Cards/Carte_24.png');
        this.load.image("Carte_25",'assets/Cards/Carte_25.png');
        this.load.image("Carte_26",'assets/Cards/Carte_26.png');
        this.load.image("Carte_27",'assets/Cards/Carte_27.png');
        this.load.image("Carte_28",'assets/Cards/Carte_28.png');
        this.load.image("Carte_29",'assets/Cards/Carte_29.png');
        this.load.image("Carte_30",'assets/Cards/Carte_30.png');

        this.load.image("Carte_31",'assets/Cards/Carte_31.png');
        this.load.image("Carte_32",'assets/Cards/Carte_32.png');
        this.load.image("Carte_33",'assets/Cards/Carte_33.png');
        this.load.image("Carte_34",'assets/Cards/Carte_34.png');
        this.load.image("Carte_35",'assets/Cards/Carte_35.png');
        this.load.image("Carte_36",'assets/Cards/Carte_36.png');
        this.load.image("Carte_37",'assets/Cards/Carte_37.png');
        this.load.image("Carte_38",'assets/Cards/Carte_38.png');
        this.load.image("Carte_39",'assets/Cards/Carte_39.png');
        this.load.image("Carte_40",'assets/Cards/Carte_40.png');

        this.load.image("Carte_41",'assets/Cards/Carte_41.png');
        this.load.image("Carte_42",'assets/Cards/Carte_42.png');
        this.load.image("Carte_43",'assets/Cards/Carte_43.png');
        this.load.image("Carte_44",'assets/Cards/Carte_44.png');
        this.load.image("Carte_45",'assets/Cards/Carte_45.png');
        this.load.image("Carte_46",'assets/Cards/Carte_46.png');
        this.load.image("Carte_47",'assets/Cards/Carte_47.png');
        this.load.image("Carte_48",'assets/Cards/Carte_48.png');
        this.load.image("Carte_49",'assets/Cards/Carte_49.png');



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