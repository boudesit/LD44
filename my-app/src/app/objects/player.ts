import { Character } from "./character";
import { Card } from "./card";

export class Player extends Character {

  deck: Card[];

  constructor(jsonObject: any) {
    super();

    this.maxLife = jsonObject.maxLife;
    this.currentLife = jsonObject.currentLife;
    this.currentAttack = jsonObject.currentAttack;
    this.currentArmor = jsonObject.currentArmor;

  }
}
