import { Character } from "./character";
import { Card } from "./card";

export class Player extends Character {

  deck: Card[];
  maxAction: number;

  currentAction: number;

  constructor(jsonObject: any) {
    super();

    this.maxLife = jsonObject.maxLife;
    this.currentLife = jsonObject.currentLife;
    this.currentAttack = jsonObject.currentAttack;
    this.currentArmor = jsonObject.currentArmor;

  }

  getDeck() {
    return this.deck;
  }

  setDeck(deck: Card[]) {
    this.deck = deck;
  }

  getMaxAction() {
    return this.maxAction;
  }

  setMaxAction(maxAction: number) {
    this.maxAction = maxAction;
  }

  getCurrentAction() {
    return this.maxAction;
  }

  setCurrentAction(currentAction: number) {
    this.currentAction = currentAction;
  }
}
