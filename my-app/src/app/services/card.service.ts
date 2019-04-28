import { Player } from '../objects/player';
import { Card } from '../objects/card';

export class CardService {

  isPlayed(player: Player, card: Card) {

    if (player.getCurrentActionPoint() < card.cost) {
      return false;
    }

    player.setCurrentActionPoint(player.getCurrentActionPoint() - card.cost);

    player.setCurrentAttack(player.getCurrentAttack() + card.attack);
    player.setCurrentArmor(player.getCurrentArmor() + card.armor);
    player.setCurrentHealth(player.getCurrentHealth() + card.heal);

    player.setNextAttackEffects(player.getNextAttackEffects().concat(card.effects));

    player.getHand().splice(player.getHand().indexOf(card), 1);
    player.getDiscard().push(card);

    return true;
  }

  createDeck(cards: Array<Card>): Card[] {
    return [cards[0], cards[0], cards[1], cards[1], cards[1], cards[1]];
  }
}

