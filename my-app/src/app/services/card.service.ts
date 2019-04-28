import { Player } from '../objects/player';
import { Card } from '../objects/card';
import {Utils} from './utils';


export class CardService {

  isPlayed(player: Player, card: Card) {
    player.setCurrentActionPoint(player.getCurrentActionPoint() - card.cost);

    player.setCurrentAttack(player.getCurrentAttack() + card.attack);
    player.setCurrentArmor(player.getCurrentArmor() + card.armor);
    player.setCurrentHealth(player.getCurrentHealth() + card.heal);

    player.setNextAttackEffects(player.getNextAttackEffects().concat(card.effects));
  }

  createDeck(cards: Array<Card>): Card[] {
    return Utils.shuffle([cards[0], cards[0], cards[1], cards[1], cards[1], cards[1], cards[2], cards[2], cards[3], cards[3], cards[4], cards[5], cards[3], cards[2], cards[9]]);
  }
}

