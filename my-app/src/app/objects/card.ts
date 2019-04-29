import { Effect } from './effect';
import { CardService } from '../services/card.service'
import { Player } from './player';

export class Card {

    id : number;
    title : string;
    description : string;
    cost : number;
    effects : Effect[];
    attack : number;
    armor : number;
    heal : number;
    score : number;
    merchantCost : number;
    spriteUrl : string;

    _cardService : CardService;


    constructor(jsonObj : any ) {

        this._cardService = new CardService();

        this.id = jsonObj.id;
        this.title = jsonObj.title;
        this.description = jsonObj.description;
        this.cost = jsonObj.cost;
        this.effects = jsonObj.effects;
        this.attack = jsonObj.attack;
        this.armor = jsonObj.armor;
        this.heal = jsonObj.heal;
        this.score = jsonObj.score;
        this.merchantCost = jsonObj.merchantCost;
        this.spriteUrl = jsonObj.spriteUrl;
    }

    getCostCard() {
        return this.cost;
      }

    isPlayed(player : Player) {
        this._cardService.isPlayed(player, this);
    }    
}