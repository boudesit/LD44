import { Player } from '../objects/player';
import { Card } from '../objects/card';
import { PlayState } from '@angular/core/src/render3/interfaces/player';

export class CardService {

    isPlayed(player : Player, card : Card) {
        player.setCurrentAttack(player.getCurrentAttack() + card.attack);
        player.setCurrentArmor(player.getCurrentArmor() + card.armor);
        player.setCurrentLife(player.getCurrentLife() + card.heal);
        player.setEffects(player.getEffects().concat(card.effects));
        player.setCurrentAction(player.getCurrentAction() - card.cost);
    }

    createDeck(cards : Card[]) {

    }
}

