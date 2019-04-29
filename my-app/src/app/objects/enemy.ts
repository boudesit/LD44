import { Character } from './character';
import {EnemyAction} from './enemyAction';

export class Enemy extends Character {

      actions: EnemyAction[];
      level: number;
      name: string;
      text: string;
      frame: number;



    constructor(jsonObj : any) {
        super();

        this.actions = jsonObj.actions;
        this.level = jsonObj.level;
        this.frame = jsonObj.frame;
        this.name = jsonObj.name;
        this.text = jsonObj.text;
        this.maxHealth = jsonObj.maxHealth;
        this.currentHealth = jsonObj.maxHealth;
        this.currentAttack = 1;
        this.currentArmor = 0;
    

    }

    getName() {
      return this.name;
    }

    getFrame() {
      return this.frame;
    }

  }
