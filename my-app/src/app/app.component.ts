import {environment} from '../environments/environment';
import { Component } from '@angular/core';

const gameConfig: GameConfig = {
  title: environment.title,
  version: environment.version,
  type: Phaser.AUTO,
  width: 1024,
  height: 576,
  parent :"div-phaser" ,
  scene: {
    create: function () {
      this.cameras.main.startFollow(this.add.text(0, 0, 'It\'s the first screen of the game').setOrigin(0.5), false);
    }
  }
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
