import { Character } from "./character";
import { Card } from "./card";
import { Effect } from './effect';

export class Player extends Character {

  deck: Card[] = [];
  hand : Card[] = [];
  discard: Card[] = [];

  maxActionPoint: number;
  currentActionPoint: number;

  constructor(jsonObject: any) {
    super();

    this.maxHealth = jsonObject.maxHealth;
    this.currentHealth = jsonObject.maxHealth;
    this.currentAttack = 1;
    this.currentArmor = 0;

    this.maxActionPoint = jsonObject.maxActionPoint;
  }

  getDeck() {
    return this.deck;
  }

  setDeck(deck: Card[]) {
    this.deck = deck;
  }

  getHand() {
    return this.hand;
  }

  setHand(hand: Card[]) {
    this.hand = hand;
  }

  getDiscard() {
    return this.discard;
  }

  setDiscard(discard: Card[]) {
    this.discard = discard;
  }

  getMaxActionPoint() {
    return this.maxActionPoint;
  }

  setMaxActionPoint(maxActionPoint: number) {
    this.maxActionPoint = maxActionPoint;
  }

  getCurrentActionPoint() {
    return this.maxActionPoint;
  }

  setCurrentActionPoint(currentActionPoint: number) {
    this.currentActionPoint = currentActionPoint;
  }

}
