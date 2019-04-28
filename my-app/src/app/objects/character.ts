import { Effect } from './effect';

export class Character {

  maxHealth: number;

  currentHealth: number;
  currentAttack: number;
  currentArmor: number;

  nextAttackEffects: Effect[] = [];

  isStuned: boolean = false;
  isImmune: boolean = false;
  isProtected: boolean = false;

  effects: Effect[] = [];

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

  getNextAttackEffects() {
    return this.nextAttackEffects;
  }

  setNextAttackEffects(nextAttackEffects: Effect[]) {
    this.nextAttackEffects = nextAttackEffects;
  }

  getIsStuned() {
    return this.isStuned;
  }

  setIsStuned(isStuned: boolean) {
    this.isStuned = isStuned;
  }

  getIsImmune() {
    return this.isImmune;
  }

  setIsImmune(isImmune: boolean) {
    this.isImmune = isImmune;
  }

  getIsProtected() {
    return this.isProtected;
  }

  setIsProtected(isProtected: boolean) {
    this.isProtected = isProtected;
  }

  getEffects() {
    return this.effects;
  }

  setEffects(effects: Effect[]) {
    this.effects = effects;
  }
}
