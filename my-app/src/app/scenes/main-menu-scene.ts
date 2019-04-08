import { Menu } from '../objects/menu';

export class MainMenuScene extends Phaser.Scene {

    launchMenu : Menu;
    optionMenu : Menu;
    fullscreenMenu : Menu;


    constructor(){
        super({
            key : "MainMenuScene"
        })
    }

    create() : void {
        let _this = this;

        var canvas = this.sys.game.canvas;
        var fullscreen = this.sys.game.device.fullscreen;
      
        if (!fullscreen.available) {
          return;
        }

        this.launchMenu = new Menu(this, this.game.config.width as number / 2, this.game.config.height as number / 2, "Start game", "HudScene");
        this.launchMenu.getMenuText().setInteractive();

        this.optionMenu = new Menu(this, this.game.config.width as number / 2, (this.game.config.height as number / 2) + 20, "options", "OptionScene");
        this.optionMenu.getMenuText().setInteractive();

        this.fullscreenMenu = new Menu(this, 20, 20, "fullscreen", null);
        this.fullscreenMenu.getMenuText().setInteractive();

        this.fullscreenMenu.getMenuText().on("pointerdown", () => {
            if(document.fullscreen) {

                console.log("jesuisla");
                canvas[fullscreen.cancel]();
            } else {

                console.log("oulà");
                // canvas.requestFullscreen();
                canvas[fullscreen.request]();
            }
        })
    }

    update() : void {

    }



}