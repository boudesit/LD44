import { Character } from './character';
import {EnemyAction} from './enemyAction';

export class Enemy extends Character {

      actions: EnemyAction[];
      level: number;
      name: string;
      text: string;



    constructor() {

        super();
    }



  }
