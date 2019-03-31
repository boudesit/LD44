import { Component } from '@angular/core';

import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public game: Phaser.Game;


  public readonly gameConfig: GameConfig = {
    title: environment.title,
    version: environment.version,
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: {
      create: function () {
        this.cameras.main.startFollow(this.add.text(0, 0, 'It\'s the first screen of the game').setOrigin(0.5), false);
      }
    }
};

  public onGameReady(game: Phaser.Game): void {
    this.game = game;
  }
}
