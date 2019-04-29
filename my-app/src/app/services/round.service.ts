import { Character } from '../objects/character';
import { Player } from '../objects/player';
import { Enemy } from '../objects/enemy';
import { Effect } from '../objects/effect';
import { EffectCondition } from '../objects/effectCondition';
import { EnemyActionService } from '../services/enemyAction.service'

import { Utils } from './utils';

export class RoundService {

  enemyActionService: EnemyActionService = new EnemyActionService();

  initPlayerForBattle(player: Player) {
    player.setCurrentActionPoint(player.getMaxActionPoint());
    player.setCurrentHealth(player.getMaxHealth());
    player.setDeck(Utils.shuffle(player.getDeck().concat(player.getDiscard().concat(player.getHand()))));
    player.setDiscard([]);
    player.setHand([]);
  }

  startRoundPlayer(player: Player, enemy: Enemy) {
    console.log(player);
    console.log(enemy);
    draw(player, 5);
    player.setCurrentActionPoint(player.getMaxActionPoint());
    resetStats(player);
    applyEffects(player, enemy);
  }

  endRoundPlayer(player: Player, enemy: Enemy) {
    inflictDamage(player, enemy);
    inflictEffects(player, enemy, player.getNextAttackEffects());
    player.setNextAttackEffects([]);
  }

  startRoundEnemy(player: Player, enemy: Enemy) {
    console.log(player);

    console.log(enemy);

    resetStats(enemy);
    applyEffects(enemy, player);
  }

  roundEnemy(enemy: Enemy) {
    let action = enemy.actions[Utils.getRandomInt(enemy.actions.length)];
    this.enemyActionService.isUsed(enemy, action);
  }

  endRoundEnemy(player: Player, enemy: Enemy) {
    inflictDamage(enemy, player);
    inflictEffects(player, enemy, enemy.getNextAttackEffects());
    enemy.setNextAttackEffects([]);
  }
}

function draw(player: Player, n: number) {
  while (player.getHand().length > 0) {
    player.getDiscard().push(player.getHand().pop());
  }

  for (let i = n; i > 0; i--) {
    if (player.getDeck().length <= 0) {
      player.setDeck(Utils.shuffle(player.getDiscard()));
      player.setDiscard([]);
    }
    player.getHand().push(player.getDeck().pop())
  }
}

function resetStats(caracter: Character) {
  caracter.setIsStuned(false);
  caracter.setCurrentAttack(1);
  caracter.setCurrentArmor(0);
}

function applyEffects(character1: Character, character2: Character) {
  for (let effect of character1.getEffects()) {
    if (effect.delay === 0) {
      if (effect.duration > 0) {
        effect.duration--;
        if (effect.type === 'boost') {
          character1.setCurrentAttack(character1.getCurrentAttack() + effect.attack);
          character1.setCurrentArmor(character1.getCurrentArmor() + effect.armor);
          character1.setCurrentHealth(character1.getCurrentHealth() + effect.health);
        }
        if (effect.type === 'stun') {
          character1.setIsStuned(true);
        }
        if (effect.type === 'immune') {
          character1.setIsImmune(true);
        }
        if (effect.type === 'protect') {
          character1.setIsProtected(true);
        }
        if (effect.type === 'poison' && !character1.getIsImmune()) {
          let poisonDamage = (character2.getCurrentAttack() - character1.getCurrentArmor()) / 2;
          character1.setCurrentHealth(character1.getCurrentHealth() - poisonDamage);
        }
      } else {
        character1.getEffects().splice(character1.getEffects().indexOf(effect), 1);
      }
    } else {
      effect.delay--;
    }
  }
}

function inflictDamage(character1: Character, character2: Character) {
  let attackDamage = character1.getCurrentAttack() - character2.getCurrentArmor();
  attackDamage = attackDamage > 0 ? attackDamage : 0;
  attackDamage = character1.getIsProtected() ? attackDamage / 2 : attackDamage;
  character2.setCurrentHealth(character2.getCurrentHealth() - attackDamage);
}

function inflictEffects(player: Player, enemy: Enemy, effects: Effect[]) {
  for (let effect of effects) {
    if (areConditionsFullfiled(player, enemy, effect.conditions)) {
      if (effect.probability > Utils.getRandomInt(99)) {
        if (effect.target === 'enemy') {
          if (effect.type === 'boost') {
            enemy.getEffects().unshift(effect);
          } else {
            enemy.getEffects().push(effect);
          }
        } else {
          if (effect.type === 'boost') {
            player.getEffects().unshift(effect);
          } else {
            player.getEffects().push(effect);
          }
        }
      }
    }
  }
}

function areConditionsFullfiled(player: Player, enemy: Enemy, conditions: EffectCondition[]) {
  if (conditions.length > 0) {
    for (let condition of conditions) {
      if (condition.type === 'state' && condition.caracteristic === 'stun') {
        if ((condition.target === 'enemy' && !enemy.getIsStuned())
          || (condition.target === 'player' && !player.getIsStuned())) {
          return false;
        }
      }
      if (condition.type === 'state' && condition.caracteristic === 'immune') {
        if ((condition.target === 'enemy' && !enemy.getIsImmune())
          || (condition.target === 'player' && !player.getIsImmune())) {
          return false;
        }
      }
      if (condition.type === 'state' && condition.caracteristic === 'protected') {
        if ((condition.target === 'enemy' && !enemy.getIsProtected())
          || (condition.target === 'player' && !player.getIsProtected())) {
          return false;
        }
      }
      if (condition.type === 'stats' && condition.caracteristic === 'attack') {
        if ((condition.target === 'enemy' && !(enemy.getCurrentAttack() > condition.value))
          || (condition.target === 'player' && !(player.getCurrentAttack() > condition.value))) {
          return false;
        }
      }
      if (condition.type === 'stats' && condition.caracteristic === 'armor') {
        if ((condition.target === 'enemy' && !(enemy.getCurrentArmor() > condition.value))
          || (condition.target === 'player' && !(player.getCurrentArmor() > condition.value))) {
          return false;
        }
      }
      if (condition.type === 'stats' && condition.caracteristic === 'health') {
        if ((condition.target === 'enemy' && !(enemy.getCurrentHealth() > condition.value))
          || (condition.target === 'player' && !(player.getCurrentHealth() > condition.value))) {
          return false;
        }
      }
    }
  }
  return true;
}
