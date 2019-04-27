import { Player } from '../objects/player';
import { Card } from '../objects/card';

export class CardService {

    isPlayed(player : Player, card : Card) {
        player.setCurrentAttack(player.getCurrentAttack() + card.attack);
        player.setCurrentArmor(player.getCurrentArmor() + card.armor);
        player.setCurrentLife(player.getCurrentLife() + card.heal);
        player.setEffects(player.getEffects().concat(card.effects));
        player.setCurrentAction(player.getCurrentAction() - card.cost);
    }

    createDeck(cards : Array<Card>) : Card[] {
        let deck = new Array<Card>();

        deck.push(cards[0]);
        deck.push(cards[0]);
        deck.push(cards[1]);
        deck.push(cards[1]);
        deck.push(cards[1]);
        deck.push(cards[1]);


        return deck;
    }
}

