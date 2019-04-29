import { Menu } from '../objects/menu';

import screenfull, { Screenfull } from 'screenfull';


export class EndGameScene extends Phaser.Scene {

    launchMenu : Menu;
    optionMenu : Menu;
    fullscreenMenu : Menu;
    _endGameService : EndGameScene;

    canvas : HTMLCanvasElement;
    fin : string;


    constructor(){
        super({
            key : "EndGameScene"
        })
    }
    init(data)
    {
     
     this.fin = data.fin;
    }

    create() : void {
        var ratio = Number(localStorage.getItem("resolution_ratio"));
        var width = this.game.config.width as number;
        var height = this.game.config.height as number;

        if(!ratio) {
            ratio = 1.875;
        }

        this.anims.create({
        
         key: 'boss',
         frames: this.anims.generateFrameNumbers(this.fin, { start: 0, end: 7 }),
         frameRate: 0.5
 
       });
       var fintt = this.add.sprite(0 / ratio, 0 / ratio, this.fin);
       fintt.setDisplaySize(width, height);
       fintt.setDisplayOrigin(0,0);
       fintt.play('boss');
     
       
 
 
       setTimeout(() => {
        this.scene.start("MainMenuScene");
       },16000);
 

    }

    update() : void {  }



}