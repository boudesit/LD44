import {Effect} from './effect';

export class Character {

  maxLife: number;

  currentLife: number;
  currentAttack: number;
  currentArmor: number;

  effects: Effect[];

  constructor() {

  }

  getMaxLife() {
    return this.maxLife;
  }

  setMaxLife(maxLife: number) {
    this.maxLife = maxLife;
  }

  getCurrentLife() {
    return this.currentLife;
  }

  setCurrentLife(currentLife: number) {
    this.currentLife = currentLife < this.maxLife ? currentLife : this.maxLife;
  }
  getCurrentAttack() {
    return this.currentAttack;
  }

  setCurrentAttack(currentAttack: number) {
    this.currentAttack = currentAttack;
  }
  getCurrentArmor() {
    return this.currentArmor;
  }

  setCurrentArmor(currentArmor: number) {
    this.currentArmor = currentArmor;
  }

  getEffects() {
    return this.effects;
  }

  setEffects(effects: Effect[]) {
    this.effects = effects;
  }
}
