import { Character } from './character';
import {EnemyAction} from './enemyAction';

export class Enemy extends Character {

      actions: EnemyAction[];
      level: number;
      name: string;
      text: string;



    constructor(jsonObj : any) {
        super();

        this.actions = jsonObj.actions;
        this.level = jsonObj.level;
        this.name = jsonObj.name;
        this.text = jsonObj.text;

    }



  }
