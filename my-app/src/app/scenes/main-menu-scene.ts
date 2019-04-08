import { Menu } from '../objects/menu';

export class MainMenuScene extends Phaser.Scene {

    launchMenu : Menu;
    optionMenu : Menu;


    constructor(){
        super({
            key : "MainMenuScene"
        })
    }

    create() : void {

        this.launchMenu = new Menu(this, this.game.config.width as number / 2, this.game.config.height as number / 2, "Start game", "HudScene");
        this.launchMenu.getMenuText().setInteractive();

        this.optionMenu = new Menu(this, this.game.config.width as number / 2, (this.game.config.height as number / 2) + 20, "options", "OptionScene");
        this.optionMenu.getMenuText().setInteractive();
    }

    update() : void {

    }



}