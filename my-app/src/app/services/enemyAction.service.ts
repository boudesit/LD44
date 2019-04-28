import { Enemy } from '../objects/enemy';
import { EnemyAction } from '../objects/enemyAction';

export class EnemyActionService {

  isUsed(enemy: Enemy, action: EnemyAction){
    if(enemy.getIsStuned()){
      return false;
    }

    enemy.setCurrentAttack(enemy.getCurrentAttack() + action.attack);
    enemy.setCurrentArmor(enemy.getCurrentArmor() + action.armor);
    enemy.setCurrentHealth(enemy.getCurrentHealth() + action.heal);

    enemy.setNextAttackEffects(enemy.getNextAttackEffects().concat(action.effects));

    return true;
  }
}
