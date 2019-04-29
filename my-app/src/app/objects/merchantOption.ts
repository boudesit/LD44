import { Card } from './card';

export class MerchantOption {
  text: String;
  cards: Card[];
  cardsHidden: boolean;
  cost: number;

  constructor(obj: any) {
    this.text = obj.text;
    this.cards = obj.cards;
    this.cardsHidden = obj.cardsHidden;
    this.cost = obj.cost;
  }
}
