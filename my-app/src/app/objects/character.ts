import {Effect} from './effect';

export class Character {

  maxHealth: number;

  currentHealth: number;
  currentAttack: number;
  currentArmor: number;

  effects: Effect[];

  constructor() {

  }

  getMaxHealth() {
    return this.maxHealth;
  }

  setMaxHealth(maxHealth: number) {
    this.maxHealth = maxHealth;
  }

  getCurrentHealth() {
    return this.currentHealth;
  }

  setCurrentHealth(currentHealth: number) {
    this.currentHealth = currentHealth < this.maxHealth ? currentHealth : this.maxHealth;
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
