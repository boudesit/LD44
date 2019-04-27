export class Charactere {

  maxLife: number;

  currentLife: number;
  currentAttack: number;
  currentArmor: number;

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
    this.currentLife = currentLife;
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
}
