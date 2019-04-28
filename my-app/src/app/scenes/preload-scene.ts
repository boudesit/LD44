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
        /*****************IMAGES***********************/
        /**********************************************/
       
     
        this.load.spritesheet('background', 
        'assets/background/BG_JEU.png',
        { frameWidth: 1920, frameHeight: 1080 })

        this.load.image("blank_card",'assets/Cards/Carte_0.png');


        this.load.image("coeur",'assets/images/coeur.png');
        this.load.image("armor",'assets/images/armor.png');
        this.load.image("attack",'assets/images/attack.png');

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