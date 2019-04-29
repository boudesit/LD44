import { Menu } from '../objects/menu';

import screenfull, { Screenfull } from 'screenfull';


export class MainMenuScene extends Phaser.Scene {

    launchMenu : Menu;
    optionMenu : Menu;
    fullscreenMenu : Menu;

    canvas : HTMLCanvasElement;


    constructor(){
        super({
            key : "MainMenuScene"
        })
    }

    create() : void {


        let _this = this;

        this.canvas = document.getElementsByTagName("canvas").item(0);

        

        if (!document.fullscreenEnabled) {
          return;
        }
        
        this.launchMenu = new Menu(this, this.game.config.width as number / 2, this.game.config.height as number / 2, "Start game", "HudScene");
        this.launchMenu.getMenuText().setInteractive();

        this.optionMenu = new Menu(this, this.game.config.width as number / 2, (this.game.config.height as number / 2) + 20, "options", "OptionScene");
        this.optionMenu.getMenuText().setInteractive();

        this.fullscreenMenu = new Menu(this, 20, 20, "fullscreen", null);

        this.canvas.onfullscreenchange = (event) => {
            console.log("FULLSCREEN CHANGE");
            console.log(event);

            event.stopPropagation();

            return null;
        }

        this.canvas.onfullscreenerror = (event) => {
            console.log("FULLSCREEN ERROR");

            console.log(event);

        }

        this.fullscreenMenu.getMenuText().on("pointerdown", () => {
                if((<Screenfull>screenfull).enabled) {
                    (<Screenfull>screenfull).toggle(_this.canvas);
                }

        });


    }

    update() : void {  }



}