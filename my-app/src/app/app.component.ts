import {environment} from '../environments/environment';
import { Component } from '@angular/core';

import { BootScene } from "./scenes/boot-scene";
import { PreloadScene } from './scenes/preload-scene';
import { MainMenuScene } from './scenes/main-menu-scene';
import { HudScene } from './scenes/hud-scene';
import { OptionScene } from './scenes/options-scene';

const gameConfig: GameConfig = {
  title: environment.title,
  version: environment.version,
  type: Phaser.AUTO,
  width: 1024,
  height: 576,
  parent :"div-phaser",
  scene: 
    [BootScene, PreloadScene, MainMenuScene, HudScene, OptionScene]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends Phaser.Game {
  public game: Phaser.Game;

  constructor() {
    super(gameConfig);
  }

  NgOnInit() {
    this.game = new Phaser.Game;
  }

}
