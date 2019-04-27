import { Character } from '../objects/character';
import { Player } from '../objects/player';
import { Enemy } from '../objects/enemy';
import { Effect } from '../objects/effect';

export class RoundService {

  startRoundPlayer(player: Player, enemy: Enemy) {
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
    resetStats(enemy);
    applyEffects(enemy, player);
  }

  endRoundEnemy(player: Player, enemy: Enemy) {
    inflictDamage(enemy, player);
    inflictEffects(player, enemy, enemy.getNextAttackEffects());
    enemy.setNextAttackEffects([]);
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function draw(player: Player, n: number) {
  for (let i = n; i >= 0; i--) {
    if (player.getDeck().length <= 0) {
      player.setDeck(shuffle(player.getDiscard()));
      player.setDiscard([]);
    }
    player.getHand().push(player.getDeck().pop())
  }
}

function resetStats(caracter: Character) {
  caracter.setIsStuned(false);
  caracter.setCurrentAttack(1);
  caracter.setCurrentArmor(1);
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
        } if (effect.type === 'poison') {
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
  character2.setCurrentHealth(character2.getCurrentHealth() - attackDamage);
}

function inflictEffects(player: Player, enemy: Enemy, effects: Effect[]) {
  for (let effect of effects) {
    if (!effect.conditionTarget ||
      (effect.conditionTarget === 'enemy' && effect.conditionState === 'stun' && enemy.getIsStuned)) {
      if (effect.probability > getRandomInt(99)) {
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
