import { Carousel } from '../objects/carousel';
import { Menu } from '../objects/menu';

export class OptionScene extends Phaser.Scene {
    
    carousel : Carousel;

    okMenu : Menu;

    constructor() {
        
        super({
            key : "OptionScene"
        })
    }
    
    preload() : void {}
    
    create() : void {
        let _this = this;
        
        const options = this.cache.json.get("options");

        this.carousel = new Carousel(this, options, 400, -200);
        this.okMenu = new Menu(this,400,-150,"ok", "MainMenuScene");

        this.okMenu.getMenuText().on("pointerdown", () => {

            localStorage.setItem("resolution_width", _this.carousel.getContentToSave().width);
            localStorage.setItem("resolution_height", _this.carousel.getContentToSave().height);
            localStorage.setItem("resolution_ratio", _this.carousel.getContentToSave().ratio);


            // fs.writeFileSync('configuration/custom-config.json', this.carousel.getContentToSave); 
        });

        this.cameras.main.startFollow(this.add.text(0, 0, 'It\'s the options screen of the game').setOrigin(0.5), false);

    }

    update() : void {
        
    }
}