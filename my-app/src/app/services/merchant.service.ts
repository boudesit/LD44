import { MerchantOption } from '../objects/merchantOption';
import { Card } from '../objects/card';
import { Utils } from './utils';
import { Player } from '../objects/player';

export class MerchantService {
  createOptions(cards: Card[]) {
    let option1 = new MerchantOption({
      text: "For a small part of your life, you can have a card.",
      cards: [cards[Utils.getRandomInt(cards.length - 1)]],
      cardsHidden: false,
      cost: 1
    });

    let option2 = new MerchantOption({
      text: "For a moderate part of your life, you can have three cards.",
      cards: [
        cards[Utils.getRandomInt(cards.length - 1)],
        cards[Utils.getRandomInt(cards.length - 1)],
        cards[Utils.getRandomInt(cards.length - 1)]
      ],
      cardsHidden: true,
      cost: 2
    });

    let option3 = new MerchantOption({
      text: "For a large part of your life, you can have five card.",
      cards: [
        cards[Utils.getRandomInt(cards.length - 1)],
        cards[Utils.getRandomInt(cards.length - 1)],
        cards[Utils.getRandomInt(cards.length - 1)],
        cards[Utils.getRandomInt(cards.length - 1)],
        cards[Utils.getRandomInt(cards.length - 1)]
      ],
      cardsHidden: true,
      cost: 3
    });

    return [option1, option2, option3];
  }

  chooseOption(player: Player, option: MerchantOption) {
    for(let card of option.cards){
      player.getDeck().push(card);
    }
    player.setMaxHealth(player.getMaxHealth() - option.cost);
    player.setCurrentHealth(player.getMaxHealth());
    player.setDeck(Utils.shuffle(player.getDeck()));
  }
}
